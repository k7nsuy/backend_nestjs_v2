import { Field, Int, ObjectType } from '@nestjs/graphql'
import { ProductCategory } from 'src/APIs/productsCategories/entities/productsCategories.entity'
import { ProductSalesLocation } from 'src/APIs/productsSalesLocation/entities/productsSalesLocation.entity'
import { ProductTags } from 'src/APIs/productsTags/entities/productsTags.entity'
import { User } from 'src/APIs/users/entities/user.entity'
import { JoinTable, Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, ManyToMany } from 'typeorm'

@Entity()
@ObjectType()
export class Product {

     @Field(() => String)
     @PrimaryGeneratedColumn('uuid')
     id: string

     @Field(() => String)
     @Column()
     name: string

     @Field(() => String)
     @Column()
     description: string

     @Field(() => Int)
     @Column()
     price: number

     @Field(() => Boolean)
     @Column({default: false})
     isSoldOut: boolean

     @Field(() => ProductSalesLocation)
     @JoinColumn() // 1:1 관계에서 JoinColumn을 사용해 관계의 중심을 나타냄
     @OneToOne(() => ProductSalesLocation) // 1:1 관계에 대한 class 명시
     productSalesLocation: ProductSalesLocation

     @Field(() => ProductCategory)
     // Many(Product)와 One(ProductCategory)의 관계
     @ManyToOne(() => ProductCategory) 
     productCategory: ProductCategory

     @Field(() => User)
     // User한명이 여러 Product 구매 가능
     @ManyToOne(() => User)
     user: User

     @Field(() => [ProductTags])
     // ManyToMany 관계에서 중간의 Table을 만들어 주기 위해 
     // 하나에만 JoinTable 명시하면 됨 ex) (Many) <=> (JoinTable) <=> (Many)
     @JoinTable()
      // 여러 태그를 여러 상품에 매칭 가능
      // 관계의 반대편에서 나를 어떻게 가리키고 있는지 서로 명시
     @ManyToMany(() => ProductTags, (productTags) => productTags.products)
     productTags: ProductTags[] // 여러 tag 사용 가능

     // ManyToMany를 JoinTable통해 자동으로 만들지 말고 직접 만들어 줘야 할 때
     // => JoinTable에서 추가적인 Column이 필요한 경우
}