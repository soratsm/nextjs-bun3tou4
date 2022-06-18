import { Box, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { SymbolSection } from '@prisma/client';
import { TocH3 } from '@src/components/atoms';
import { useCalcTotal } from '@src/hooks/useCalcTotal';
import { memo } from 'react';

type Props = { section: SymbolSection[] };

const SymbolSectionTable: React.FC<Props> = (props) => {
  const { section } = props;
  const { totalPer } = useCalcTotal();
  const caption = '投資対象分散（分野）';

  return (
    <Box w={{ base: 'xs', md: 'xl' }}>
      {section.length ? (
        <>
          <TocH3>{caption}</TocH3>
          <TableContainer whiteSpace='unset'>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>分野</Th>
                  <Th>数量</Th>
                </Tr>
              </Thead>
              <Tbody>
                {section.map((value, key) => (
                  <Tr key={key}>
                    <Td>{value.name}</Td>
                    <Td wordBreak={'break-word'} >
                      {value.per as unknown as number}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>{`${caption}の合計`}</Th>
                  <Th>{`${totalPer(section)}%`}</Th>
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

export default memo(SymbolSectionTable);
