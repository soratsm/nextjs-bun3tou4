import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { SymbolExplain } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { TocH3 } from '@src/components/atoms';
import { memo } from 'react';

type Props = {
  explain: SymbolExplain;
};

type TdItem = {
  name: string;
  value: string | Decimal;
};

const SymbolBaseData: React.FC<Props> = (props) => {
  const { id, name, issuer, expense_per, yield_per, competing_etf } = props.explain;

  const TdItems: Array<TdItem> = [
    { name: 'ティッカー', value: id },
    { name: '名称', value: name },
    { name: '運用会社', value: issuer },
    { name: '経費率', value: expense_per },
    { name: '直近配当利回り', value: yield_per },
    { name: '競合するETF', value: competing_etf },
  ];

  return (
    <>
      <TocH3>{`${id}の基本情報`}</TocH3>
      <TableContainer whiteSpace='unset' w={{ base: 'md', md: 'xl' }}>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>項目</Th>
              <Th>{`基本情報`}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {TdItems.map((td, index) => (
              <Tr key={index}>
                <Td>{td.name}</Td>
                <Td>{td.value as unknown as number}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default memo(SymbolBaseData);
