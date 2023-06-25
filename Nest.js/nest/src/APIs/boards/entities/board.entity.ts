import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
@ObjectType()
export class Board {

     // increment => 테이블에 대한 데이터가 하나씩 생성할 때 마다 index 1씩 증가
     @PrimaryGeneratedColumn("increment")
     @Field(() => Int)
     number: number

     @Column()
     @Field(() => String)
     writer: string

     @Column()
     @Field(() => String)
     title: string

     @Column()
     @Field(() => String)
     content: string
}