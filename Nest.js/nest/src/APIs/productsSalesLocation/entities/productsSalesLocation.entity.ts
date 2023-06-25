import { Field, Float, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
@ObjectType()
export class ProductSalesLocation {

     @Field(() => String)
     @PrimaryGeneratedColumn('uuid')
     id: string

     @Field(() => String)
     @Column()
     addressDetail: string

     @Field(() => Float)
     // precision = 총 9자리, scale = 소숫점 자리
     @Column({type: "decimal", precision: 9, scale: 6})
     lat: number

     @Field(() => Float)
     @Column({type: "decimal", precision: 9, scale: 6})
     lng: number

     @Field(() => Date)
     @Column()
     meetingTime: Date

}