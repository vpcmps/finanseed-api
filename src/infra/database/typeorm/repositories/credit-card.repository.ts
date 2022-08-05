import { Repository } from 'typeorm';
import { CreditCard } from '../../../domain/entities/credit-card.entity';
import { CreditCardRepositoryInterface } from '../../../domain/repositories/credit-card-repository.inteface';
export class CreditCardRepository implements CreditCardRepositoryInterface {
  constructor(private repository: Repository<CreditCard>) {}
  async update(creditCardId: string, creditCard: CreditCard): Promise<void> {
    await this.repository.update({ id: creditCardId }, creditCard);
  }
  async find(creditCardId: string): Promise<CreditCard> {
    return await this.repository.findOneBy({ id: creditCardId });
  }
}
