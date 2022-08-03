import { EntitySchema } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'user',
  target: User,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    fullName: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  },
  relations: {
    wallets: {
      type: 'one-to-many',
      target: 'Wallet',
      inverseSide: 'user',
    },
  },
});
