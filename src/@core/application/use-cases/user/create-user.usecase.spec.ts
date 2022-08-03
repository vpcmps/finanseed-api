import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';
import { CreateUserUseCase } from './create-user.usecase';

const userRepo: jest.Mocked<UserRepositoryInterface> = {
  insert: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  findAll: jest.fn(),
};

describe('CreateUserUseCase test', () => {
  it('should call userRepository.insert one time', async () => {
    const createUserUseCase = new CreateUserUseCase(userRepo);
    await createUserUseCase.execute({
      fullName: 'Vinicius P Campos',
      email: 'v.campos@test.com',
    });
    expect(userRepo.insert).toHaveBeenCalledTimes(1);
    //expect(userRepo.insert).toHaveBeenCalledWith()
  });
});
