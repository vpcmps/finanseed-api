import { Repository } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';
import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';

export class UserRepository implements UserRepositoryInterface {
  constructor(private repository: Repository<User>) {}
  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }
  async update(userId: string, user: User): Promise<void> {
    await this.repository.update({ id: userId }, user);
  }
  async find(userId: string): Promise<User> {
    return await this.repository.findOneBy({ id: userId });
  }
  async insert(user: User): Promise<void> {
    await this.repository.insert(user);
  }
}
