import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';
import { UseCaseInterface } from '../../../domain/use-cases/use-case.interface';
import { CreditCard } from '../../../domain/entities/credit-card.entity';
export class CreateCreditCardUseCase
  implements UseCaseInterface<CreateCreditCardInput>
{
  constructor(private walletRepository: WalletRepositoryInterface) {}
  async execute(input: CreateCreditCardInput) {
    const wallet = await this.walletRepository.find(input.walletId);
    if (!wallet) throw new Error('Invalid Wallet');

    const creditCard = new CreditCard(input);
    wallet.addCreditCard(creditCard);
    await this.walletRepository.update(input.walletId, wallet);
  }
}
type CreateCreditCardInput = {
  name: string;
  walletId: string;
};
