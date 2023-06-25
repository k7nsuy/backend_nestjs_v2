import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule} from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './APIs/boards/boards.module';
import { ProductsModule } from './APIs/products/products.module';

@Module({
  imports: [
    BoardsModule,
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/commons/graphql/schema.graphql"
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1390',
      database: 'typeorm',
      entities: [__dirname + "/APIs/**/entities/*.entity.{ts,js}"],
      synchronize: true,
      logging: true,
    })
  ],
})
export class AppModule {}
