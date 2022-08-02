import { EntitySchema } from 'typeorm';
import { Transaction } from '../../../domain/entities/transaction.entity';
import { Direction } from '../../../domain/enums/direction.enum';

export const TransactionSchema = new EntitySchema<Transaction>({
  name: 'transaction',
  target: Transaction,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    value: {
      type: 'double',
    },
    direction: {
      type: 'enum',
      enum: Direction,
      default: Direction.Out,
    },
    created_at: {
      type: 'timestamp',
    },
    tags: {
      type: 'simple-json',
    },
  },
});
