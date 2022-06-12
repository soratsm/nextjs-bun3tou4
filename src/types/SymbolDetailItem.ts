import { SymbolCountry, SymbolHold, SymbolSection } from '@prisma/client';

type SymbolDetailItem = {
  tdArray: Array<SymbolCountry | SymbolHold | SymbolSection>;
  caption: string;
  th: string;
  isHold: boolean;
};

export default SymbolDetailItem;
