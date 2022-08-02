import { UseCaseInterface } from '../../../domain/use-cases/use-case.interface';
import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';
import { BankAccount } from '../../../domain/entities/bank-account.entity';
export class CreateBankAccountUseCase
  implements UseCaseInterface<CreateBankAccountInput>
{
  constructor(private walletRepository: WalletRepositoryInterface) {}
  async execute(input: CreateBankAccountInput) {
    const wallet = await this.walletRepository.find(input.walletId);
    if (!wallet) throw new Error('Invalid wallet Id');
    const bankAccount = new BankAccount(input);
    wallet.addBankAccount(bankAccount);
    await this.walletRepository.update(input.walletId, wallet);
  }
}

type CreateBankAccountInput = {
  walletId: string;
  name: string;
};
