import { Box } from '@chakra-ui/react';
import { InvestmentItem, TypeSymbolExplains } from '@src/types';
import { memo, useState } from 'react';
import { AmountInput, GenerateSimulation, InvestmentTable } from '../organisms';

type Props = { symbols: TypeSymbolExplains };

const Simulation: React.FC<Props> = (props) => {
  const { symbols } = props;
  const [investmentList, setInvestmentList] = useState<InvestmentItem[]>([
    { id: '', per: '0.0', yield_per: 0 },
    { id: '', per: '0.0', yield_per: 0 },
    { id: '', per: '0.0', yield_per: 0 },
  ]);

  return (
    <>
      <Box p={'10'}>
        <AmountInput />
        <InvestmentTable
          symbols={symbols}
          investmentList={investmentList}
          setInvestmentList={setInvestmentList}
        />
        <GenerateSimulation investmentList={investmentList} />
      </Box>
    </>
  );
};

export default memo(Simulation);

// style
