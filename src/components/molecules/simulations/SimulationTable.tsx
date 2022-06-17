import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { TocH3 } from '@src/components/atoms';
import { SimulationResult } from '@src/types';
import { memo } from 'react';

type Props = {
  items: SimulationResult[];
  caption: string;
};

const SimulationTable: React.FC<Props> = (props) => {
  const { items, caption } = props;

  return (
    <Box w={{ base: 'xs', md: 'xl' }}>
      {items.length ? (
        <>
          <TocH3>{caption}</TocH3>
          <TableContainer whiteSpace='unset'>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>名称</Th>
                  <Th>比率</Th>
                  <Th>金額</Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((value, key) => (
                  <Tr key={key}>
                    <Td>{key + 1}</Td>
                    <Td>{value.name}</Td>
                    <Td>{value.per}%</Td>
                    <Td>
                      {value.value}
                      <br />
                      万円
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default memo(SimulationTable);
