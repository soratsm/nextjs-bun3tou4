import { InvestmentItem, TypeSymbolDetail } from '@src/types';
import axios from 'axios';
import { useState } from 'react';
import useSWR, { Fetcher } from 'swr';

type Props = {
  investmentList: InvestmentItem[];
};

/**
    リストで作成されたデータをもとに
  */
export const useCreateInput = (props: Props) => {
  const { investmentList } = props;
  const [searchIds, setSearchIds] = useState<string>('');
  const [organizedInvestmentList, setOrganizedInvestmentList] = useState<InvestmentItem[]>([]);
  const fetcher: Fetcher<TypeSymbolDetail[] | undefined> = (url: string) =>
    axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    searchIds.length ? [`/api/${searchIds}`, searchIds] : null,
    fetcher,
  );

  // idが空 又は perが0の行を削除しつつ、同一idを合算
  const organizeInvestmentList = async () => {
    let idArr: string[] = [];
    let organizeArr = [];
    for (let i = 0; i < investmentList.length; i++) {
      if (investmentList[i].id !== '' && Number(investmentList[i].per) !== 0) {
        // 同一idが存在するか
        const indexArr = idArr.indexOf(investmentList[i].id);
        if (indexArr < 0) {
          // 存在しない場合
          // 検索用
          idArr.push(investmentList[i].id);

          // 計算用
          let hash = {};
          hash['id'] = investmentList[i].id;
          hash['per'] = investmentList[i].per;
          hash['yield_per'] = investmentList[i].yield_per;
          organizeArr.push(hash);
        } else {
          // 存在する場合
          organizeArr[indexArr].per = (
            Number(organizeArr[indexArr].per) + Number(investmentList[i].per)
          ).toString();
        }
      }
    }
    if (idArr.length > 0) {
      //idの昇順
      organizeArr.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      });
    }
    return { idArr, organizeArr };
  };

  // DBからin句で検索
  const onClickGenerate = async () => {
    const { idArr, organizeArr } = await organizeInvestmentList();

    if (idArr.length > 0) {
      setSearchIds(idArr.join());
      setOrganizedInvestmentList(organizeArr);
    } else {
      setSearchIds('');
      setOrganizedInvestmentList([]);
    }
  };
  return { data, error, onClickGenerate, organizedInvestmentList };
};
