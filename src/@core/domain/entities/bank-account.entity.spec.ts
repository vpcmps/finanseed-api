import { Direction } from '../enums/direction.enum';
import { BankAccount } from './bank-account.entity';
import { Transaction } from './transaction.entity';
describe('BankAccount Test', () => {
  it('should create the BankAccount', () => {
    const bankAccount = new BankAccount({ name: 'Nubank' });
    expect(bankAccount).toBeDefined();
  });
  it('should add transaction', () => {
    const bankAccount = new BankAccount({ name: 'Nubank' });
    const transaction = new Transaction({
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
      const bankAccount = new BankAccount({ name: 'Nubank' });
      const transaction = new Transaction({
        name: 'cheesecake factory',
        direction: Direction.In,
        value: 0,
      });
      bankAccount.addTransaction(transaction);
    }
    expect(addInvalidTransaction).toThrowError();
  });
});
