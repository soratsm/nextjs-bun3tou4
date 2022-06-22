import { TypeSymbolExplains } from '@src/types';
import { useEffect, useState } from 'react';

type Props = { symbols: TypeSymbolExplains };
type serchLst = {
  id: string;
  serchValue: string;
}[];

/**
 * 入力値を基に動的にリストを書き換え、インクリメント検索を実現
 */
const useSymbolsFilter = (props: Props) => {
  const { symbols } = props;
  const [keyword, setKeyword] = useState('');
  const [filteredSymbols, setFilteredSymbols] = useState<TypeSymbolExplains>(symbols);
  const [searchListSymbols, setSearchListSymbols] = useState<serchLst>([]);

  // 検索にヒットさせる文字列、名称やタグ、類似ETFも含める
  useEffect(() => {
    const tmpSerchList: serchLst = [];
    symbols.map((symbol) => {
      let itemStr = symbol.id + '/' + symbol.explain.name + '/';
      if (symbol.explain.tags) {
        itemStr = itemStr + symbol.explain.tags + '/';
      }
      if (symbol.explain.competing_etf) {
        itemStr = itemStr + symbol.explain.competing_etf;
      }
      tmpSerchList.push({ id: symbol.id, serchValue: itemStr });
    });
    setSearchListSymbols(tmpSerchList);
  }, []);

  useEffect(() => {
    if (keyword === '') {
      setFilteredSymbols(symbols);
      return;
    }

    const searchKeywords = keyword
      .trim()
      .toLowerCase()
      .match(/[^\s]+/g);

    // 入力されたキーワードが空白のみの場合、全件表示
    if (searchKeywords === null) {
      setFilteredSymbols(symbols);
      return;
    }

    const resultItems = searchListSymbols.filter((searchListSymbol) =>
      searchKeywords.every((kw) => searchListSymbol.serchValue.toLowerCase().indexOf(kw) !== -1),
    );
    const tmpFilteredSymbols: TypeSymbolExplains = [];
    for (let key of Object.keys(symbols)) {
      // 連想配列のキーと配列の値が一致するか検索
      for (let i of resultItems) {
        if (symbols[key].id == i.id) {
          tmpFilteredSymbols.push(symbols[key]);
          break;
        }
      }
    }
    setFilteredSymbols(tmpFilteredSymbols);
  }, [keyword]);

  return {
    keyword,
    setKeyword,
    filteredSymbols,
  };
};

export default useSymbolsFilter;
