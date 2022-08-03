import { User } from '../../../domain/entities/user.entity';
import { UserRepositoryInterface } from '../../../domain/repositories/user-repository.interface';
export class ListAllUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}
  async execute(): Promise<ListAllUsersOutput> {
    const users = await this.userRepository.findAll();
    return users.map((u) => u.toJSON());
  }
}
type ListAllUsersOutput = {
  fullName: string;
  email: string;
  id: string;
}[];
