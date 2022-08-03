import { Direction } from '../enums/direction.enum';
import { Transaction } from './transaction.entity';

describe('Transaction test', () => {
  it('should create the transaction', () => {
    const transaction = Transaction.new({
      name: 'transaction',
      direction: Direction.In,
      value: 15,
    });
    expect(transaction).toBeDefined();
  });
});
