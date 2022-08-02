import { BankAccount } from '../entities/bank-account.entity';

export interface BankAccountRepositoryInterface {
  update(bankAccountId: string, bankAccount: BankAccount): Promise<void>;
  find(bankAccountId: string): Promise<BankAccount>;
}
