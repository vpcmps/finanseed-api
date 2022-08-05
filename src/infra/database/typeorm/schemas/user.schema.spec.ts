import { DataSource } from 'typeorm';
import { UserSchema } from './user.schema';
import { User } from '../../../domain/entities/user.entity';
import { WalletSchema } from './wallet.schema';
import { BankAccountSchema } from './bank-account.schema';
import { CreditCardSchema } from './credit-card.schema';
import { TransactionSchema } from './transaction.schema';

describe('User Schema Tests', () => {
  test('create', async () => {
    const dataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'finanseed',
      entities: [
        BankAccountSchema,
        CreditCardSchema,
        TransactionSchema,
        UserSchema,
        WalletSchema,
      ],
      synchronize: true,
    });
    await dataSource.initialize();
    const user = User.create({
      fullName: 'Vinícius Campos',
      email: 'test@finansees.com',
    });
    const UserRepo = dataSource.getRepository(User);
    await UserRepo.save(user);
    console.log(await UserRepo.findOneBy({ id: user.id }));
  });
});
