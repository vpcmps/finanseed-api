import { Wallet } from './wallet.entity';
import { BankAccount } from './bank-account.entity';
import { CreditCard } from './credit-card.entity';

describe('Wallet Test', () => {
  it('should create wallet', () => {
    const wallet = Wallet.new({
      name: 'carteira 1',
    });

    expect(wallet).toBeDefined();
  });

  it('should add bank account in the wallet', () => {
    const wallet = Wallet.new({
      name: 'carteira 1',
    });
    const bankAccount = BankAccount.new({
      name: 'Nubank',
    });
    wallet.addBankAccount(bankAccount);
    expect(wallet.accounts).toHaveLength(1);
    expect(wallet.accounts[0]).toBe(bankAccount);
  });

  it('should add credit card in the wallet', () => {
    const wallet = Wallet.new({
      name: 'carteira 1',
    });
    const creditCard = CreditCard.new({
      name: 'Nubank',
    });
    wallet.addCreditCard(creditCard);
    expect(wallet.creditCards).toHaveLength(1);
    expect(wallet.creditCards[0]).toBe(creditCard);
  });

  it('given a undefined bank account, when added to the wallet, should throw error', () => {
    function addInvalidBankAccount() {
      const wallet = Wallet.new({
        name: 'carteira 1',
      });

      wallet.addBankAccount(undefined);
    }

    expect(addInvalidBankAccount).toThrowError();
  });

  it('given a undefined credit card, when added to the wallet, should add credit card in the wallet', () => {
    function addInvalidCreditCard() {
      const wallet = Wallet.new({
        name: 'carteira 1',
      });
      wallet.addCreditCard(undefined);
    }
    expect(addInvalidCreditCard).toThrowError();
  });
});
