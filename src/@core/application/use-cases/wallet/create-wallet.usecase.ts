import { Wallet } from '../../../domain/entities/wallet.entity';
import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';
import { UseCaseInterface } from '../../../domain/use-cases/use-case.interface';
import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';

export class CreateWalletUseCase
  implements UseCaseInterface<CreateWalletInput>
{
  constructor(
    private userRepository: UserRepositoryInterface,
    private walletRepository: WalletRepositoryInterface,
  ) {}
  async execute(input: CreateWalletInput) {
    const user = await this.userRepository.find(input.userId);

    if (!user) throw new Error('Invalid user');

    const wallet = Wallet.new(input);

    await this.walletRepository.create(wallet);
  }
}

type CreateWalletInput = {
  userId: string;
  name: string;
};
