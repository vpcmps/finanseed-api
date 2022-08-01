import { Wallet } from './wallet.entity';
import { BankAccount } from './bank-account.entity';
import { CreditCard } from './credit-card.entity';

describe('Wallet Test', () => {
  it('should create wallet', () => {
    const wallet = new Wallet({
      name: 'carteira 1',
    });

    expect(wallet).toBeDefined();
  });

  it('should add bank account in the wallet', () => {
    const wallet = new Wallet({
      name: 'carteira 1',
    });
    const bankAccount = new BankAccount({
      name: 'Nubank',
    });
    wallet.addBankAccount(bankAccount);
    expect(wallet.accounts).toHaveLength(1);
    expect(wallet.accounts[0]).toBe(bankAccount);
  });

  it('should add credit card in the wallet', () => {
    const wallet = new Wallet({
      name: 'carteira 1',
    });
    const creditCard = new CreditCard({
      name: 'Nubank',
    });
    wallet.addCreditCard(creditCard);
    expect(wallet.creditCards).toHaveLength(1);
    expect(wallet.creditCards[0]).toBe(creditCard);
  });

  it('given a undefined bank account, when added to the wallet, should throw error', () => {
    function addInvalidBankAccount() {
      const wallet = new Wallet({
        name: 'carteira 1',
      });

      wallet.addBankAccount(undefined);
    }

    expect(addInvalidBankAccount).toThrowError();
  });

  it('given a undefined credit card, when added to the wallet, should add credit card in the wallet', () => {
    function addInvalidCreditCard() {
      const wallet = new Wallet({
        name: 'carteira 1',
      });
      wallet.addCreditCard(undefined);
    }
    expect(addInvalidCreditCard).toThrowError();
  });
});
