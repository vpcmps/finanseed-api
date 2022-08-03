import { AddTransactionBankAccountUseCase } from './add-transaction-bank-account.usecase';
import { BankAccountRepositoryInterface } from '../../../domain/repositories/bank-account-repository.interface';
import { Direction } from '../../../domain/enums/direction.enum';
import { BankAccount } from '../../../domain/entities/bank-account.entity';

const bankAccountRepository: jest.Mocked<BankAccountRepositoryInterface> = {
  find: jest.fn().mockImplementation((accountId) => {
    if (accountId === '0bbfcc97-35f0-4363-925a-336df2a4608f')
      return BankAccount.new({
        name: 'Nubank',
      });
    return;
  }),
  update: jest.fn(),
};
describe('AddTransactionBankAccount Test', () => {
  it('should create a new transaction', async () => {
    const addTransactionUseCase = new AddTransactionBankAccountUseCase(
      bankAccountRepository,
    );

    await addTransactionUseCase.execute({
      accountId: '0bbfcc97-35f0-4363-925a-336df2a4608f',
      direction: Direction.In,
      name: 'Bakery',
      value: 12,
    });

    expect(bankAccountRepository.find).toHaveBeenCalledTimes(1);
    expect(bankAccountRepository.update).toHaveBeenCalledTimes(1);
  });
  it('should throw a error', async () => {
    async function addInvalidAccount() {
      const addTransactionUseCase = new AddTransactionBankAccountUseCase(
        bankAccountRepository,
      );

      await addTransactionUseCase.execute({
        accountId: '01bfcc97-35f0-4363-925a-336df2a4608f',
        direction: Direction.In,
        name: 'Bakery',
        value: 12,
      });
    }

    expect(addInvalidAccount).rejects.toThrowError();
  });
});
