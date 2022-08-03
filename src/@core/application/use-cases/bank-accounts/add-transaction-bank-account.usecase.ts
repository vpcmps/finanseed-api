import { Transaction } from '../../../domain/entities/transaction.entity';
import { Direction } from '../../../domain/enums/direction.enum';
import { BankAccountRepositoryInterface } from '../../../domain/repositories/bank-account-repository.interface';
import { UseCaseInterface } from '../../../domain/use-cases/use-case.interface';

export class AddTransactionBankAccountUseCase
  implements UseCaseInterface<AddTransactionBankAccountInput>
{
  constructor(private bankAccountRepository: BankAccountRepositoryInterface) {}
  async execute(input: AddTransactionBankAccountInput) {
    const bankAccount = await this.bankAccountRepository.find(input.accountId);
    if (!bankAccount) throw new Error('Invalid Bank Account');

    const transaction = Transaction.new(input);
    bankAccount.addTransaction(transaction);
    this.bankAccountRepository.update(input.accountId, bankAccount);
  }
}

type AddTransactionBankAccountInput = {
  accountId: string;
  name: string;
  value: number;
  direction: Direction;
};
