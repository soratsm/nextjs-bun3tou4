import prisma from '@src/lib/prisma';
import { TypeSymbolDetail, TypeSymbolExplains } from '@src/types';
/**
  SSG用のAPI呼び出しロジック
*/
export const useAllSymbol = () => {
  /**
    一覧情報取得
  */
  const getAllSymbolsExplain = async (): Promise<TypeSymbolExplains> => {
    const data = await prisma.symbol.findMany({
      include: {
        explain: true,
      },
      where: {
        deleted: false,
        explain: {
          summary: {
            not: '',
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
    // dataをstringifyで文字列型のjsonに変換し、それをparseで解析しオブジェクトに変換
    return JSON.parse(JSON.stringify(data));
  };

  /**
    動的ページのURL取得
  */
  const getAllSymbolIds = async () => {
    const symbolIds = await prisma.symbol.findMany({
      select: {
        id: true,
      },
      where: {
        deleted: false,
      },
    });
    return symbolIds.map((symbolId) => {
      return {
        params: {
          id: symbolId.id,
        },
      };
    });
  };

  /**
    動的ページに表示する情報取得
  */
  const getSymbolDetail = async (id: string): Promise<TypeSymbolDetail> => {
    const data = await prisma.symbol.findFirst({
      include: {
        explain: true,
        country: {
          orderBy: {
            per: 'desc',
          },
        },
        hold: {
          orderBy: {
            per: 'desc',
          },
        },
        section: {
          orderBy: {
            per: 'desc',
          },
        },
      },
      where: {
        id: id,
        deleted: false,
        explain: { isNot: null },
      },
    });
    return JSON.parse(JSON.stringify(data));
  };

  return { getAllSymbolsExplain, getAllSymbolIds, getSymbolDetail };
};
