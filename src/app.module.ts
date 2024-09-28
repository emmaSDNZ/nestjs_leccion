import { MiddlewareConsumer, Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';


@Module({
  imports: [ProductsModule, UsersModule, AuthModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure (consumer: MiddlewareConsumer){
    consumer.apply(LoggingMiddleware).forRoutes("*")
  }
}
