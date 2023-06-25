import {Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductsServiceCreate } from './interfaces/products.interface';
import { IProductsServiceFindOne } from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {

     constructor(
          @InjectRepository(Product)
          private readonly productsRepository: Repository<Product>
     ) {}

     findAll(): Promise<Product[]>  {
          return this.productsRepository.find()
     }
     
     findOne({productId}: IProductsServiceFindOne): Promise<Product> {    
          return this.productsRepository.findOne({where: {
               id: productId}
          })
     }

     // Promise => 동기적으로 return
     createProduct({createProductInput} : IProductsServiceCreate): Promise<Product> {
          const result = this.productsRepository.save({
               ...createProductInput,
               // name: 'test',
               // description: 'test description',
               // price: 3000,
          })
          return result
     }
}