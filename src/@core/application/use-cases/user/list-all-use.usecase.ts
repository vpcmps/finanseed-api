import { User } from '../../../domain/entities/user.entity';
import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';
export class ListAllUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}
  execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
