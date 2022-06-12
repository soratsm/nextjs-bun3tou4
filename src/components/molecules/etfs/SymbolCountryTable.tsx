import {
  Box,
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { SymbolCountry } from '@prisma/client';
import { TocH3 } from '@src/components/atoms';
import { useCalcTotal } from '@src/hooks/useCalcTotal';
import { memo } from 'react';

type Props = { country: SymbolCountry[] };

const SymbolCountryTable: React.FC<Props> = (props) => {
  const { country } = props;
  const { totalPer } = useCalcTotal();
  const caption = '投資対象分散（国）';

  return (
    <Box w={{ base: 'md', md: 'xl' }}>
      {country.length ? (
        <>
          <TocH3>{caption}</TocH3>
          <TableContainer whiteSpace='unset'>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>国</Th>
                  <Th>数量</Th>
                </Tr>
              </Thead>
              <Tbody>
                {country.map((value, key) => (
                  <Tr key={key}>
                    <Td>{value.name}</Td>
                    <Td wordBreak={'break-word'} minW={'100'}>
                      {value.per as unknown as number}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>{`${caption}の合計`}</Th>
                  <Th>{`${totalPer(country)}%`}</Th>
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

export default memo(SymbolCountryTable);
