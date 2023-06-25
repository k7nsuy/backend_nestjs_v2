import {HttpException, Injectable, UnprocessableEntityException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductsServiceCheckSoldOut, IProductsServiceCreate, IProductsServiceFindOne, IProductsServiceUpdate } from './interfaces/products-service.interface';

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

     // 수정 또다른 방법들
     // this.productsRepository.create() // db 접속이랑 상관없이 등록을 위해서 빈 껍데기 객체를 만듦
     // this.productsRepository.insert() // 결과를 객체로 못 돌려 받는 등록 방법
     // this.productsRepository.update() // 결과를 객체로 못 돌려 받는 수정 방법
     // this.productsRepository.save() // 한번 db를 조회 후, 객체를 돌려 받아서 2번 일이 진행

     
     async update({productId, updateProductInput}: IProductsServiceUpdate): Promise<Product> {
          
     // 기존 있는 내용 재사용하여 로직을 통일
     const product = await this.findOne({productId}) // 규모가 커질수록 아래와 같은 똑같은 코드 사용 지양
     // await this.productsRepository.findOne({where: {id: productId}})

     // sold out 검증 (검증은 주로 서비스에서)
     this.checkSoldOut({product});

     
     try {
          const result = this.productsRepository.save({
               ...product, // 수정 후 , 수정되지 않은 다른 결과값까지 모두 객체로 돌려 받고 싶을 때
               ...updateProductInput,
               // id: productId, // 등록할 때는 id가 필요 없지만, id를 넣게 되면 수정으로 처리
               // name: updateProductInput.name,
               // description: updateProductInput.description,
               // price: updateProductInput.price
          })
          return result
     } catch (err) {
          console.log(err);
     }
}
     // 1. checksold out을 함수로 만드는 이유
     // => 수정 및 삭제시 같은 검증 로직 사용
     checkSoldOut({product}: IProductsServiceCheckSoldOut): void { 
          if (product.isSoldOut) {
               throw new UnprocessableEntityException(`이미 판매 완료된 상품입니다.`)
          }
     }

     async delete(productId: string): Promise<Boolean> {
          // 1. 하드 삭제(실제 삭제)
          // const result = await this.productsRepository.delete(productId)
          // return result.affected ? true : false

          // 2. 소프트 삭제(history 남음)
          // this.productsRepository.update({id: productId}, {isDeleted: true})

          // 3. 소프트 삭제(deletedAt)
          // this.productsRepository.update({id: productId}, {deletedAt: new Date()})

          // 4. 소프트 삭제(TypeOrm 제공) - softRemove
          // 장점: 여러 id 한번에 삭제 가능 , 단점: id로만 삭제 가능
          // ex) .softRemove([{id: 1}, {id: 2}])
          // const result = await this.productsRepository.softRemove({id: productId})
          
          // 5. 소프트 삭제(TypeOrm 제공) - softDelete
          // 장점: 다른 컬럼 으로도 삭제 가능 , 단점: 여러 id 한번에 삭제 불가
          const result = await this.productsRepository.softDelete({id: productId})
          return result.affected ? true : false
     }
}

