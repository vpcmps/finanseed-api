import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';
import { CreateWalletUseCase } from './create-wallet.usecase';
import { User } from '../../../domain/entities/user.entity';

const userRepo: jest.Mocked<UserRepositoryInterface> = {
  insert: jest.fn(),
  find: jest.fn().mockImplementation((userId) => {
    if (userId == 'd941747c-11a3-11ed-861d-0242ac120002')
      return User.create({ email: 'test@email.com', fullName: 'John Doe' });
    return;
  }),
  update: jest.fn(),
  findAll: jest.fn(),
};

describe('CreateWalletUseCase Test', () => {
  it('should create a new wallet', async () => {
    const createWalletUseCase = new CreateWalletUseCase(userRepo);
    await createWalletUseCase.execute({
      name: 'wallet 1',
      userId: 'd941747c-11a3-11ed-861d-0242ac120002',
    });
    expect(userRepo.find).toHaveBeenCalledTimes(1);
    expect(userRepo.update).toHaveBeenCalledTimes(1);
  });
  it('should throw error', () => {
    async function invalidUser() {
      const createWalletUseCase = new CreateWalletUseCase(userRepo);
      await createWalletUseCase.execute({
        name: 'wallet 1',
        userId: 'd341747c-11a3-11ed-861d-0242ac120002',
      });
    }
    expect(invalidUser).rejects.toThrowError();
    // expect(userRepo.find).toHaveBeenCalledTimes(1);
    // expect(userRepo.update).not.toHaveBeenCalled();
  });
});
