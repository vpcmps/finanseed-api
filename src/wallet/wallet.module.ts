import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { WalletSchema } from '../@core/infra/database/schemas/wallet.schema';
import { CreateWalletUseCase } from '../@core/application/use-cases/wallet/create-wallet.usecase';
import { DataSource } from 'typeorm';
import { UserRepository } from '../@core/infra/database/repositories/user.repository';
import { User } from '../@core/domain/entities/user.entity';
import { UserRepositoryInterface } from '../@core/domain/repositories/user-repository.interface';
import { ListWalletsUseCase } from '../@core/application/use-cases/wallet/list-wallets.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([WalletSchema])],
  controllers: [WalletController],
  providers: [
    WalletService,
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) =>
        new UserRepository(dataSource.getRepository(User)),
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateWalletUseCase,
      useFactory: (userRepository: UserRepositoryInterface) =>
        new CreateWalletUseCase(userRepository),
      inject: [UserRepository],
    },
    {
      provide: ListWalletsUseCase,
      useFactory: (userRepository: UserRepositoryInterface) =>
        new ListWalletsUseCase(userRepository),
      inject: [UserRepository],
    },
  ],
})
export class WalletModule {}
