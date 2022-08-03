import { DataSource } from 'typeorm';
import { UserSchema } from './user.schema';
import { User } from '../../../domain/entities/user.entity';

describe('User Schema Tests', () => {
  test('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [UserSchema],
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
