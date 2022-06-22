import { SimulationTotalPer } from '@src/store/SimulationTotalPer';
import { InvestmentItem, TypeSymbolExplains } from '@src/types';
import { SetStateAction, useEffect, useState } from 'react';
import { ActionMeta } from 'react-select';
import { useSetRecoilState } from 'recoil';

type Props = {
  symbols: TypeSymbolExplains;
  investmentList: InvestmentItem[];
  setInvestmentList: (value: SetStateAction<InvestmentItem[]>) => void;
};

interface IOption {
  label: string;
  value: string;
}

/**
 * テーブルの画面入力や表示関わるロジックを提供
 */
export const useSimulationInvestment = (props: Props) => {
  const { symbols, investmentList, setInvestmentList } = props;
  const [idOptions, setIdOptions] = useState<IOption[]>([]);
  const setTotalPer = useSetRecoilState(SimulationTotalPer);

  useEffect(() => {
    setTotalPer(0.0);
    // DB値からリスト表示用に変換
    let hashArray = [];
    for (var i = 0; i < symbols.length; i++) {
      if (!i) {
        var hash = {};
        hash['label'] = '';
        hash['value'] = '';
        hashArray.push(hash);
      }
      var hash = {};
      hash['label'] = symbols[i].id;
      hash['value'] = symbols[i].id;
      hashArray.push(hash);
    }
    setIdOptions(hashArray);
  }, []);

  const calcTotal = () => {
    let tmptotal = 0;
    investmentList.map((item) => {
      tmptotal += Number(item.per);
    });
    return tmptotal;
  };

  const onClickAddButton = () => {
    setInvestmentList(investmentList.concat([{ id: '', per: '0.0', yield_per: 0 }]));
  };

  const onChangePer = (valueString: string, _: any, key: number) => {
    let tmpInvestmentList = [...investmentList];
    const ngRegexp = /\+|\-/;
    if (ngRegexp.test(valueString)) {
      tmpInvestmentList[key].per = '0';
    } else {
      tmpInvestmentList[key].per = valueString;
    }
    setInvestmentList(tmpInvestmentList);
    setTotalPer(calcTotal());
  };

  const onClickPerButton = (key: number, isUp: boolean) => {
    let tmpInvestmentList = [...investmentList];
    if (isUp) {
      if (Number(tmpInvestmentList[key].per) >= 100) {
        tmpInvestmentList[key].per = '100';
      } else {
        tmpInvestmentList[key].per = (Number(tmpInvestmentList[key].per) + 10).toString();
      }
    } else {
      if (Number(tmpInvestmentList[key].per) <= 0) {
        tmpInvestmentList[key].per = '0.0';
      } else {
        tmpInvestmentList[key].per = (Number(tmpInvestmentList[key].per) - 10).toString();
      }
    }
    setInvestmentList(tmpInvestmentList);
    setTotalPer(calcTotal());
  };

  const onChangeId = (newValue: any, actionMeta: ActionMeta<any>) => {
    let tmpInvestmentList = [...investmentList];
    const index = Number(actionMeta.name.substring(1, 4));

    // '×'ボタン押下時にnullが入ってくるのでelseで定義
    if (newValue) {
      tmpInvestmentList[index].id = newValue.value;

      for (let key of Object.keys(symbols)) {
        // 連想配列のキーと配列の値が一致するか検索
        if (symbols[key].id == newValue.value) {
          tmpInvestmentList[index].yield_per = Number(symbols[key].explain.yield_per);
          break;
        }
      }
    } else {
      tmpInvestmentList[index].id = '';
      tmpInvestmentList[index].yield_per = 0;
    }
    setInvestmentList(tmpInvestmentList);
  };

  return {
    investmentList,
    idOptions,
    onClickAddButton,
    onChangeId,
    onClickPerButton,
    onChangePer,
  };
};
