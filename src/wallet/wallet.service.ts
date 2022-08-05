import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { CreateWalletUseCase } from '../@core/application/use-cases/wallet/create-wallet.usecase';
import { ListWalletsUseCase } from '../@core/application/use-cases/wallet/list-wallets.usecase';

@Injectable()
export class WalletService {
  constructor(
    private createUseCase: CreateWalletUseCase,
    private listUseCase: ListWalletsUseCase,
  ) {}
  create(createWalletDto: CreateWalletDto) {
    this.createUseCase.execute(createWalletDto);
  }

  findAll() {
    return this.listUseCase.execute();
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
