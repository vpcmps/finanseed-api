import { EntitySchema } from 'typeorm';
import { Wallet } from '@/@core/domain/entities/wallet.entity';

export const WalletSchema = new EntitySchema<Wallet>({
  name: 'Wallet',
  target: Wallet,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    accounts: {
      type: 'one-to-many',
      target: 'BankAccount',
    },
    creditCards: {
      type: 'one-to-many',
      target: 'CreditCard',
    },
    user: {
      type: 'many-to-one',
      target: 'User',
      createForeignKeyConstraints: true,
    },
  },
});
