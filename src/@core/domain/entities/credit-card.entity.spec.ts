import { Direction } from '../enums/direction.enum';
import { CreditCard } from './credit-card.entity';
import { Transaction } from './transaction.entity';

describe('CreditCard Test', () => {
  it('should create the BankAccount', () => {
    const bankAccount = CreditCard.new({ name: 'Nubank' });
    expect(bankAccount).toBeDefined();
  });
  it('should add transaction', () => {
    const bankAccount = CreditCard.new({ name: 'Nubank' });
    const transaction = Transaction.new({
      name: 'cheesecake factory',
      direction: Direction.In,
      value: 15,
    });
    bankAccount.addTransaction(transaction);
    expect(bankAccount.transactions).toHaveLength(1);
    expect(bankAccount.transactions[0]).toBe(transaction);
  });
  it('shouldn`t accept transaction', () => {
    function addInvalidTransaction() {
      const bankAccount = CreditCard.new({ name: 'Nubank' });
      const transaction = Transaction.new({
        name: 'cheesecake factory',
        direction: Direction.In,
        value: 0,
      });
      bankAccount.addTransaction(transaction);
    }
    expect(addInvalidTransaction).toThrowError();
  });
});
