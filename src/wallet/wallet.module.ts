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
import { UserSchema } from '../@core/infra/database/schemas/user.schema';
import { WalletRepository } from '../@core/infra/database/repositories/wallet.repository';
import { Wallet } from '../@core/domain/entities/wallet.entity';
import { WalletRepositoryInterface } from '../@core/domain/repositories/wallet-repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([WalletSchema, UserSchema])],
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
      provide: WalletRepository,
      useFactory: (dataSource: DataSource) =>
        new WalletRepository(dataSource.getRepository(Wallet)),
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateWalletUseCase,
      useFactory: (
        userRepository: UserRepositoryInterface,
        walletRepository: WalletRepositoryInterface,
      ) => new CreateWalletUseCase(userRepository, walletRepository),
      inject: [UserRepository, WalletRepository],
    },
    {
      provide: ListWalletsUseCase,
      useFactory: (walletRepository: WalletRepositoryInterface) =>
        new ListWalletsUseCase(walletRepository),
      inject: [WalletRepository],
    },
  ],
})
export class WalletModule {}
