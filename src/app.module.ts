import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountSchema } from '@/infra/database/typeorm/schemas/bank-account.schema';
import { CreditCardSchema } from '@/infra/database/typeorm/schemas/credit-card.schema';
import { TransactionSchema } from '@/infra/database/typeorm/schemas/transaction.schema';
import { UserSchema } from '@/infra/database/typeorm/schemas/user.schema';
import { WalletSchema } from '@/infra/database/typeorm/schemas/wallet.schema';

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
