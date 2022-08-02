import { CreateBankAccountUseCase } from './create-bank-account.usecase';
import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';
import { Wallet } from '../../../domain/entities/wallet.entity';

const walletRepository: jest.Mocked<WalletRepositoryInterface> = {
  update: jest.fn(),
  find: jest.fn().mockImplementation((walletId) => {
    if (walletId == 'd941747c-11a3-11ed-861d-0242ac120002')
      return new Wallet(
        { name: 'Wallet 1' },
        'd941747c-11a3-11ed-861d-0242ac120002',
      );
    return;
  }),
};
describe('CreateBankAccountUseCase Test', () => {
  it('should add a bankAccount', async () => {
    const createBankAccountUseCase = new CreateBankAccountUseCase(
      walletRepository,
    );
    await createBankAccountUseCase.execute({
      name: 'Nubank',
      walletId: 'd941747c-11a3-11ed-861d-0242ac120002',
    });
    expect(walletRepository.find).toHaveBeenCalledTimes(1);
    expect(walletRepository.update).toHaveBeenCalledTimes(1);
  });
  it('should throw an error', () => {
    async function shouldAddToAInvalidWallet() {
      const createBankAccountUseCase = new CreateBankAccountUseCase(
        walletRepository,
      );
      await createBankAccountUseCase.execute({
        name: 'Nubank',
        walletId: 'd9241747c-11a3-11ed-861d-0242ac120002',
      });
    }
    expect(shouldAddToAInvalidWallet).rejects.toThrowError();
  });
});
