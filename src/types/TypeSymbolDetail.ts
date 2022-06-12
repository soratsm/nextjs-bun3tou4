import { Symbol, SymbolCountry, SymbolExplain, SymbolHold, SymbolSection } from '@prisma/client';

type TypeSymbolDetail = Symbol & {
  explain: SymbolExplain;
  country: SymbolCountry[];
  hold: SymbolHold[];
  section: SymbolSection[];
};

export default TypeSymbolDetail;
