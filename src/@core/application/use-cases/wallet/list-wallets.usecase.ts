import { WalletRepositoryInterface } from '../../../domain/repositories/wallet-repository.interface';
export class ListWalletsUseCase {
  constructor(private walletRepository: WalletRepositoryInterface) {}
  async execute(): Promise<ListWalletsOutput> {
    const wallets = await this.walletRepository.findAll();
    return wallets.map((w) => w.toJSON());
  }
}

type ListWalletsOutput = {
  userId: string;
  name: string;
}[];
