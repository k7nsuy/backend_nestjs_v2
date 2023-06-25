import { Field, ObjectType } from '@nestjs/graphql'
import { Product } from 'src/APIs/products/entities/product.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm'

@Entity()
@ObjectType()
export class ProductTags {

     @Field(() => String)
     @PrimaryGeneratedColumn('uuid')
     id: string

     @Field(() => String)
     @Column()
     name: string

     @Field(() => [Product])
     // 반대 관계에서 나를 어떻게 가리키는지 명시
     @ManyToMany(() => Product, (products) => products.productTags)
     products: Product[] // 여러 product
}