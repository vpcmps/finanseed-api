import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from '../@core/application/use-cases/user/create-user.usecase';
import { ListAllUserUseCase } from '../@core/application/use-cases/user/list-all-use.usecase';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private createUseCase: CreateUserUseCase,
    private listAllUseCase: ListAllUserUseCase,
  ) {}
  create(createUserDto: CreateUserDto) {
    this.createUseCase.execute(createUserDto);
  }

  findAll() {
    return this.listAllUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
