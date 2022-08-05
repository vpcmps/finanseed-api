import { Wallet } from '../entities/wallet.entity';

export interface WalletRepositoryInterface {
  findAll(): Promise<Wallet[]>;
  create(wallet: Wallet): Promise<void>;
  update(walletId: string, wallet: Wallet): Promise<void>;
  find(walletId: string): Promise<Wallet>;
}
