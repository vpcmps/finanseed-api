import { User } from '../entities/user.entity';

export interface UserRepositoryInterface {
  insert(user: User): Promise<void>;
}
