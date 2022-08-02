import { Wallet } from '../entities/wallet.entity';

export interface WalletRepositoryInterface {
  update(walletId: string, wallet: Wallet): Promise<void>;
  find(walletId: string): Promise<Wallet>;
}
