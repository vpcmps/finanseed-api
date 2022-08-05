import { Repository } from 'typeorm';
import { Wallet } from '../../../domain/entities/wallet.entity';
import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';
export class WalletRepository implements WalletRepositoryInterface {
  constructor(private repository: Repository<Wallet>) {}
  async findAll(): Promise<Wallet[]> {
    return await this.repository.find();
  }
  async create(wallet: Wallet): Promise<void> {
    await this.repository.create(wallet);
  }
  async update(walletId: string, wallet: Wallet): Promise<void> {
    await this.repository.update({ id: walletId }, wallet);
  }
  async find(walletId: string): Promise<Wallet> {
    return await this.repository.findOneBy({ id: walletId });
  }
}
