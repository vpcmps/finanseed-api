import { Wallet } from '../../../domain/entities/wallet.entity';
import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';
import { UseCaseInterface } from '../../../domain/use-cases/use-case.interface';

export class CreateWalletUseCase
  implements UseCaseInterface<CreateWalletInput>
{
  constructor(private userRepository: UserRepositoryInterface) {}
  async execute(input: CreateWalletInput) {
    const user = await this.userRepository.find(input.userId);

    if (!user) throw new Error('Invalid user');

    const wallet = new Wallet(input);

    user.addWallet(wallet);
    await this.userRepository.update(input.userId, user);
  }
}

type CreateWalletInput = {
  userId: string;
  name: string;
};
