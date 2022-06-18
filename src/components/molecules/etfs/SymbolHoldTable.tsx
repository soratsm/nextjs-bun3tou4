import { Box, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { SymbolHold } from '@prisma/client';
import { TocH3 } from '@src/components/atoms';
import { useCalcTotal } from '@src/hooks/useCalcTotal';
import { memo } from 'react';

type Props = { hold: SymbolHold[] };

const SymbolHoldTable: React.FC<Props> = (props) => {
  const { hold } = props;
  const { totalPer } = useCalcTotal();
  const caption = '主要投資銘柄';

  return (
    <Box w={{ base: 'xs', md: 'xl' }}>
      {hold.length ? (
        <>
          <TocH3>{caption}</TocH3>
          <TableContainer whiteSpace='unset'>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>コード</Th>
                  <Th>銘柄名</Th>
                  <Th>数量</Th>
                </Tr>
              </Thead>
              <Tbody>
                {hold.map((value, key) => (
                  <Tr key={key}>
                    <Td>{value.holdId || '-'}</Td>
                    <Td>{value.name}</Td>
                    <Td wordBreak={'break-word'}>
                      {value.per as unknown as number}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>コード</Th>
                  <Th>{`${caption}の合計`}</Th>
                  <Th>{`${totalPer(hold)}%`}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default memo(SymbolHoldTable);
