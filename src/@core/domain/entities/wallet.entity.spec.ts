import { Wallet } from './wallet.entity';

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
    wallet.add;
  });
});
