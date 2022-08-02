import { User } from '../entities/user.entity';

export interface UserRepositoryInterface {
  findAll(): Promise<User[]>;
  update(userId: string, user: User): Promise<void>;
  find(userId: string): Promise<User>;
  insert(user: User): Promise<void>;
}
