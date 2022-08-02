import { EntitySchema } from 'typeorm';
import { CreditCard } from '../../../domain/entities/credit-card.entity';
import { Transaction } from '../../../domain/entities/transaction.entity';
export const CreditCardSchema = new EntitySchema<CreditCard>({
  name: 'CreditCard',
  target: CreditCard,
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
      target: Transaction,
    },
  },
});
