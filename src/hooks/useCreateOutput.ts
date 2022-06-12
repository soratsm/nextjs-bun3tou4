import { SimulationAmount } from '@src/store/SimulationAmount';
import { InvestmentItem, SimulationResult, TypeSymbolDetail } from '@src/types';
import produce from 'immer';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

type Props = {
  data: TypeSymbolDetail[];
  organizedInvestmentList: InvestmentItem[];
};

export const useCreateOutput = (props: Props) => {
  const { data, organizedInvestmentList } = props;
  const amount = useRecoilValue(SimulationAmount);

  const [recalCountry, setRecalCountry] = useState<SimulationResult[]>([]);
  const [recalHold, setRecalHold] = useState<SimulationResult[]>([]);
  const [recalSection, setRecalSection] = useState<SimulationResult[]>([]);

  // 小数点第2位で四捨五入
  const round2 = useCallback((num: number) => {
    return Math.round(num * 100) / 100;
  }, []);

  // immerにて再計算
  const recalResult = useCallback(
    (
      dataArr: any[],
      idxPer: number,
      otherPer: number,
      setState: (value: SetStateAction<SimulationResult[]>) => void,
    ) => {
      dataArr.map((data) => {
        const arrPer = round2((Number(data.per) * idxPer) / 100);
        if (arrPer) {
          const arrAmount = round2((arrPer * amount) / 100);
          otherPer += arrPer;
          setState(
            produce((draft) => {
              const target = draft.find((target) => target.name === data.name);
              if (target) {
                target.per = round2(target.per + arrPer);
                target.value = round2(target.value + arrAmount);
              } else {
                draft.push({
                  name: data.name,
                  per: arrPer,
                  value: arrAmount,
                });
              }
            }),
          );
        }
      });
      return otherPer;
    },
    [amount],
  );

  // その他を追加
  const addOther = useCallback(
    (otherPer: number, setState: (value: SetStateAction<SimulationResult[]>) => void) => {
      if (otherPer < 100) {
        const addOtherPer = round2(100 - otherPer);
        const addOtherAmount = round2((addOtherPer * amount) / 100);
        setState(
          produce((draft) => {
            const target = draft.find((target) => target.name === 'Other');
            if (target) {
              target.per = round2(target.per + addOtherPer);
              target.value = round2(target.value + addOtherAmount);
            } else {
              draft.push({
                name: 'Other',
                per: addOtherPer,
                value: addOtherAmount,
              });
            }
          }),
        );
      }
    },
    [amount],
  );

  useEffect(() => {
    if (data) {
      let otherPerCountry = 0;
      let otherPerHold = 0;
      let otherPerSection = 0;

      data.map((symbolData, idIdx) => {
        // 最初の要素の場合、初期化
        if (!idIdx) {
          setRecalCountry([]);
          setRecalHold([]);
          setRecalSection([]);
        }
        const idxPer = Number(organizedInvestmentList[idIdx].per);

        // 加重平均計算
        otherPerCountry = recalResult(symbolData.country, idxPer, otherPerCountry, setRecalCountry);
        otherPerHold = recalResult(symbolData.hold, idxPer, otherPerHold, setRecalHold);
        otherPerSection = recalResult(symbolData.section, idxPer, otherPerSection, setRecalSection);

        // 最後の要素の場合、Otherを追加
        if (data.length - 1 === idIdx) {
          addOther(otherPerCountry, setRecalCountry);
          addOther(otherPerHold, setRecalHold);
          addOther(otherPerSection, setRecalSection);
        }
      });
    }
  }, [data, organizedInvestmentList]);

  return { recalCountry, recalHold, recalSection };
};
