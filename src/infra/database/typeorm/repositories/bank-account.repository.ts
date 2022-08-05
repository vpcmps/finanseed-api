import { Repository } from 'typeorm';
import { BankAccount } from '../../../domain/entities/bank-account.entity';
import { BankAccountRepositoryInterface } from '../../../domain/repositories/bank-account-repository.interface';

export class BankAccountRepository implements BankAccountRepositoryInterface {
  constructor(private repository: Repository<BankAccount>) {}
  async update(bankAccountId: string, bankAccount: BankAccount): Promise<void> {
    await this.repository.update({ id: bankAccountId }, bankAccount);
  }
  async find(bankAccountId: string): Promise<BankAccount> {
    return await this.repository.findOneBy({ id: bankAccountId });
  }
}
