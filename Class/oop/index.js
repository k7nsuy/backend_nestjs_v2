import express from 'express';
import { ProductController } from './controllers/product.controller.js'
import { CouponController } from './controllers/coupon.controller.js';
import { CashService } from './services/cash.service.js';
import { ProductService } from './services/product.service.js';
import { PointService } from './services/point.service.js';

const app = express();
const port = 3000

const productService = new ProductService()
const cashService = new CashService()
const productcontroller = new ProductController(cashService, productService)

const pointService = new PointService()
const couponcontroller = new CouponController(pointService)

app.post('/products/buy', productcontroller.buyProduct)
app.post('/products/refund', productcontroller.refundProduct)
app.post('/products/coupon', couponcontroller.buyCoupon)


function serverLog() {
     console.log(`server started port ${port} ✅`);
}

app.listen(port, serverLog);