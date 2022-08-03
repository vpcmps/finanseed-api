import { Direction } from '../enums/direction.enum';
import { BankAccount } from './bank-account.entity';
import { Transaction } from './transaction.entity';
describe('BankAccount Test', () => {
  it('should create the BankAccount', () => {
    const bankAccount = BankAccount.new({ name: 'Nubank' });
    expect(bankAccount).toBeDefined();
  });
  it('should add transaction', () => {
    const bankAccount = BankAccount.new({ name: 'Nubank' });
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
      const bankAccount = BankAccount.new({ name: 'Nubank' });
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
