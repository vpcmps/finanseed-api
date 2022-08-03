import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';
import { Wallet } from '../../../domain/entities/wallet.entity';
import { CreateCreditCardUseCase } from './create-credit-card.usecase';

const walletRepository: jest.Mocked<WalletRepositoryInterface> = {
  update: jest.fn(),
  find: jest.fn().mockImplementation((walletId) => {
    if (walletId == 'd941747c-11a3-11ed-861d-0242ac120002')
      return Wallet.new(
        { name: 'Wallet 1' },
        'd941747c-11a3-11ed-861d-0242ac120002',
      );
    return;
  }),
};
describe('CreateCreditCardUseCase Test', () => {
  it('should add a CreditCard', async () => {
    const createCreditCardUseCase = new CreateCreditCardUseCase(
      walletRepository,
    );
    await createCreditCardUseCase.execute({
      name: 'Nubank',
      walletId: 'd941747c-11a3-11ed-861d-0242ac120002',
    });
    expect(walletRepository.find).toHaveBeenCalledTimes(1);
    expect(walletRepository.update).toHaveBeenCalledTimes(1);
  });
  it('should throw an error', () => {
    async function shouldAddToAInvalidWallet() {
      const createCreditCardUseCase = new CreateCreditCardUseCase(
        walletRepository,
      );
      await createCreditCardUseCase.execute({
        name: 'Nubank',
        walletId: 'd9241747c-11a3-11ed-861d-0242ac120002',
      });
    }
    expect(shouldAddToAInvalidWallet).rejects.toThrowError();
  });
});
