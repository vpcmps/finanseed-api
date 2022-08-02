import { AddTransactionCreditCardUseCase } from './add-transaction-credit-card.usecase';
import { Direction } from '../../../domain/enums/direction.enum';
import { CreditCardRepositoryInterface } from '../../../domain/repositories/credit-card-repository.inteface';
import { CreditCard } from '../../../domain/entities/credit-card.entity';

const CreditCardRepository: jest.Mocked<CreditCardRepositoryInterface> = {
  find: jest.fn().mockImplementation((accountId) => {
    if (accountId === '0bbfcc97-35f0-4363-925a-336df2a4608f')
      return new CreditCard({
        name: 'Nubank',
      });
    return;
  }),
  update: jest.fn(),
};
describe('AddTransactionCreditCard Test', () => {
  it('should create a new transaction', async () => {
    const addTransactionUseCase = new AddTransactionCreditCardUseCase(
      CreditCardRepository,
    );

    await addTransactionUseCase.execute({
      creditCardId: '0bbfcc97-35f0-4363-925a-336df2a4608f',
      direction: Direction.In,
      name: 'Bakery',
      value: 12,
    });

    expect(CreditCardRepository.find).toHaveBeenCalledTimes(1);
    expect(CreditCardRepository.update).toHaveBeenCalledTimes(1);
  });
  it('should throw a error', async () => {
    async function addInvalidAccount() {
      const addTransactionUseCase = new AddTransactionCreditCardUseCase(
        CreditCardRepository,
      );

      await addTransactionUseCase.execute({
        creditCardId: '01bfcc97-35f0-4363-925a-336df2a4608f',
        direction: Direction.In,
        name: 'Bakery',
        value: 12,
      });
    }

    expect(addInvalidAccount).rejects.toThrowError();
  });
});
