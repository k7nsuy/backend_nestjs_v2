import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
@ObjectType()
export class User {

     @Field(() => String)
     @PrimaryGeneratedColumn('uuid')
     id: string

     @Field(() => String)
     @Column()
     name: string

     @Field(() => String)
     @Column()
     email: string
}