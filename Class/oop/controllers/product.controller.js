export class ProductController {

     cashService
     productService

     constructor(cashService, productService) {
          this.cashService = cashService;
          this.productService = productService;
     }

     buyProduct = (req,res) => {

          const hasMoney = this.cashService.checkValue()

          // 2. 판매여부 검증
          const isSoldOut = this.productService.checkSoldOut()

          //3 상품 구매하는 코드
          if(hasMoney && !isSoldOut) {
               res.send(`상품 구매 완료`)
          }
     }

     refundProduct = (req,res) => {
          const hasMoney = this.cashService.checkValue()
          
          // 2. 상품 환불하는 코드
          if(hasMoney && !isSoldOut) {
               res.send(`상품 구매 완료`)
          }
          
     }
}