import { User } from '../../domain/entities/user.entity';
import { UserRepositoryInterface } from '../../domain/repositories/user-repository.interface';
export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}
  async execute(input: CreateUserInput) {
    const user = new User(input);
    await this.userRepository.insert(user);
  }
}
type CreateUserInput = {
  fullName: string;
  email: string;
};
