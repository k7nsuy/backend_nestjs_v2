import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
@ObjectType()
export class ProductCategory {

     @Field(() => String)
     @PrimaryGeneratedColumn('uuid')
     id: string

     @Field(() => String)
     @Column({unique: true}) // 중복 불가
     name: string
}