import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from '@/@core/infra/database/repositories/user.repository';
import { DataSource } from 'typeorm';
import { User } from '@/@core/domain/entities/user.entity';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '@/@core/infra/database/schemas/user.schema';
import { CreateUserUseCase } from '@/@core/application/use-cases/user/create-user.usecase';
import { ListAllUserUseCase } from '@/@core/application/use-cases/user/list-all-use.usecase';
import { UserRepositoryInterface } from '@/@core/domain/repositories/user-repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) =>
        new UserRepository(dataSource.getRepository(User)),
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (userRepository: UserRepositoryInterface) =>
        new CreateUserUseCase(userRepository),
      inject: [UserRepository],
    },
    {
      provide: ListAllUserUseCase,
      useFactory: (userRepository: UserRepositoryInterface) =>
        new ListAllUserUseCase(userRepository),
      inject: [UserRepository],
    },
    UserService,
  ],
})
export class UserModule {}
