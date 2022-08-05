import { PrismaService } from '../prisma.service';
import { UserRepositoryInterface } from '@/@core/domain/repositories/user-repository.interface';
import { User } from '@/@core/domain/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPrismaRepository implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<User[]> {
    return (await this.prisma.user.findMany()) as User[];
  }

  async update(userId: string, user: User): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: user,
    });
  }

  async find(userId: string): Promise<User> {
    return (await this.prisma.user.findFirst({
      where: { id: userId },
    })) as User;
  }
  async insert(user: User): Promise<void> {
    this.prisma.user.create({ data: user });
  }
}
