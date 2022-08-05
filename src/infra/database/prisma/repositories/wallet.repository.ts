import { PrismaService } from '../prisma.service';
import { WalletRepositoryInterface } from '../../../../@core/domain/repositories/wallet-repository.interface';
import { Wallet } from '../../../../@core/domain/entities/wallet.entity';

export class WalletPrismaRepository implements WalletRepositoryInterface {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<Wallet[]> {
    return (await this.prisma.wallet.findMany()) as Wallet[];
  }
  async create(wallet: Wallet): Promise<void> {
    await this.prisma.wallet.create({ data: wallet });
  }
  async update(walletId: string, wallet: Wallet): Promise<void> {
    await this.prisma.wallet.update({
      where: {
        id: walletId,
      },
      data: wallet,
    });
  }
  async find(walletId: string): Promise<Wallet> {
    return (await this.prisma.wallet.findFirst({
      where: { id: walletId },
    })) as Wallet;
  }
}
