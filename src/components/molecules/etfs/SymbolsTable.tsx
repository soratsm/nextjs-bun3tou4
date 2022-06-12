import {
  Button,
  ButtonProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { CSTag, NavLink } from '@src/components/atoms';
import { TypeSymbolExplains } from '@src/types';
import { memo } from 'react';

type Props = { symbols: TypeSymbolExplains };

const SymbolsTable: React.FC<Props> = (props) => {
  const { symbols } = props;
  return (
    <TableContainer whiteSpace='unset' w={'100vh'}>
      <Table>
        <Thead>
          <Tr bg={'bgList'}>
            <Th>Ticker</Th>
            <Th>概要</Th>
          </Tr>
        </Thead>
        <Tbody>
          {symbols.map((symbol, key) => (
            <Tr key={key} bg={key % 2 && 'bgList'}>
              <Td>
                <NavLink href={`/etfs/${symbol.id}`}>
                  <SButton>{symbol.id}</SButton>
                </NavLink>
              </Td>
              {symbol.explain.comment ? (
                <Td wordBreak={'break-word'}>
                  <CSTag tags={symbol.explain.tags} />
                  <br />
                  {symbol.explain.comment}
                </Td>
              ) : (
                <Td wordBreak={'break-word'}>
                  <CSTag tags={symbol.explain.tags} />
                  <br />
                  {symbol.explain.summary || '-'}
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr bg={'bgList'}>
            <Th>Ticker</Th>
            <Th>概要</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default memo(SymbolsTable);

// style
const SButton: React.FC<ButtonProps> = (props) => (
  <Button
    align='center'
    px={8}
    w={5}
    _hover={{
      bg: 'accent1',
      color: 'white',
    }}
    {...props}
  />
);
