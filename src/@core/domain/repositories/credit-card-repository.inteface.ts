import { CreditCard } from '../entities/credit-card.entity';

export interface CreditCardRepositoryInterface {
  update(creditCardId: string, creditCard: CreditCard): Promise<void>;
  find(creditCardId: string): Promise<CreditCard>;
}
