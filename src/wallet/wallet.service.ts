import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { CreateWalletUseCase } from '../@core/application/use-cases/wallet/create-wallet.usecase';

@Injectable()
export class WalletService {
  constructor(private createUseCase: CreateWalletUseCase) {}
  create(createWalletDto: CreateWalletDto) {
    this.createUseCase.execute(createWalletDto);
  }

  findAll() {
    return `This action returns all wallet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
