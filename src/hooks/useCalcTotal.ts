import { SymbolCountry, SymbolHold, SymbolSection } from '@prisma/client';
import { useCallback } from 'react';

type Props = Array<SymbolCountry | SymbolHold | SymbolSection>;

export const useCalcTotal = () => {
  const totalPer = useCallback((items: Props) => {
    let total = 0;
    items.map((item) => {
      total += (item.per as unknown as number) * 100;
    });
    total = total / 100 >= 100 ? 100 : total / 100;
    return total;
  }, []);
  return { totalPer };
};
