import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountSchema } from './@core/infra/database/schemas/bank-account.schema';
import { CreditCardSchema } from './@core/infra/database/schemas/credit-card.schema';
import { TransactionSchema } from './@core/infra/database/schemas/transaction.schema';
import { UserSchema } from './@core/infra/database/schemas/user.schema';
import { WalletSchema } from './@core/infra/database/schemas/wallet.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'finanseed',
      entities: [
        BankAccountSchema,
        CreditCardSchema,
        TransactionSchema,
        UserSchema,
        WalletSchema,
      ],
      synchronize: true,
    }),
    UserModule,
    WalletModule,
    BankAccountModule,
    CreditCardModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
