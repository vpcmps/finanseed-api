import { Transaction } from '../../../domain/entities/transaction.entity';
import { Direction } from '../../../domain/enums/direction.enum';
import { CreditCardRepositoryInterface } from '../../../domain/repositories/credit-card-repository.inteface';
import { UseCaseInterface } from '../../../domain/use-cases/use-case.interface';

export class AddTransactionCreditCardUseCase
  implements UseCaseInterface<AddTransactionCreditCardInput>
{
  constructor(private creditCardRepository: CreditCardRepositoryInterface) {}
  async execute(input: AddTransactionCreditCardInput) {
    const creditCard = await this.creditCardRepository.find(input.creditCardId);

    if (!creditCard) throw new Error('Invalid CreditCard');

    const transaction = Transaction.new(input);
    creditCard.addTransaction(transaction);
    this.creditCardRepository.update(input.creditCardId, creditCard);
  }
}
type AddTransactionCreditCardInput = {
  creditCardId: string;
  name: string;
  value: number;
  direction: Direction;
};
