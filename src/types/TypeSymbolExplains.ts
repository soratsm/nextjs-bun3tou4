import { Symbol, SymbolExplain } from '@prisma/client';

type TypeSymbolExplains = (Symbol & {
  explain: SymbolExplain;
})[];

export default TypeSymbolExplains;
