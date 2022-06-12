import { PrismaClient } from '@prisma/client';
import { TypeSymbolDetail } from '@src/types';

const prisma = new PrismaClient();

export default async function handle(
  req: { query: { ids: string } },
  res: { json: (arg0: TypeSymbolDetail[]) => void },
) {
  const { ids } = req.query;
  const idarr = ids.split(/,/g);
  const data = await prisma.symbol.findMany({
    include: {
      explain: true,
      country: true,
      hold: true,
      section: true,
    },
    where: {
      id: { in: idarr },
    },
    orderBy: { id: 'asc' },
  });
  res.json(data);
}
