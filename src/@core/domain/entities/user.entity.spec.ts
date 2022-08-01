import { User } from './user.entity';
import { Wallet } from './wallet.entity';

describe('User Test', () => {
  it('should create the user', () => {
    const user = new User({
      fullName: 'Vinícius P Campos',
      email: 'v.campos@test.com',
    });
    expect(user.fullName).toBe('Vinícius P Campos');
    expect(user.email).toBe('v.campos@test.com');
  });
  it('should add a new wallet', () => {
    const user = new User({
      fullName: 'Vinícius P Campos',
      email: 'v.campos@test.com',
    });
    const wallet = new Wallet({
      name: 'Wallet 1',
    });
    user.addWallet(wallet);
    expect(user.wallets).toHaveLength(1);
    expect(user.wallets[0]).toBe(wallet);
  });
  it('should throw a error when add a undefined wallet', () => {
    function addInvalidWallet() {
      const user = new User({
        fullName: 'Vinícius P Campos',
        email: 'v.campos@test.com',
      });

      user.addWallet(undefined);
    }
    expect(addInvalidWallet).toThrowError();
  });
});
