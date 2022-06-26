import { SymbolCountry } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { useCalcTotal } from '@src/hooks/useCalcTotal';
import { renderHook } from '@testing-library/react';

const dummyDataMin: Array<SymbolCountry> = [
  {
    id: 'dummyA',
    name: 'dummyA',
    per: 0 as unknown as Decimal,
  },
];

const dummyDataMax: Array<SymbolCountry> = [
  {
    id: 'dummyA',
    name: 'dummyA',
    per: 100.1 as unknown as Decimal,
  },
];

const dummyDataAdd: Array<SymbolCountry> = [
  {
    id: 'dummyA',
    name: 'dummyA',
    per: 25 as unknown as Decimal,
  },
  {
    id: 'dummyA',
    name: 'dummyA',
    per: 50 as unknown as Decimal,
  },
];

describe('他のCustom Hookに依存していないCustom Hookのテスト', () => {
  test('Limit value', () => {
    const { result } = renderHook(() => useCalcTotal());

    expect(result.current.totalPer(dummyDataMin)).toBe(0);
    expect(result.current.totalPer(dummyDataMax)).toBe(100);
  });

    test('Add value', () => {
      const { result } = renderHook(() => useCalcTotal());

      expect(result.current.totalPer(dummyDataAdd)).toBe(75);
    });
});
