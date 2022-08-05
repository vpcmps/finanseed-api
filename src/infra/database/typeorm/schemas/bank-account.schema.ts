import { EntitySchema } from 'typeorm';
import { BankAccount } from '../../../domain/entities/bank-account.entity';
import { Transaction } from '../../../domain/entities/transaction.entity';

export const BankAccountSchema = new EntitySchema<BankAccount>({
  name: 'BankAccount',
  target: BankAccount,
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
    transactions: {
      type: 'one-to-many',
      target: 'Transaction',
    },
  },
});
