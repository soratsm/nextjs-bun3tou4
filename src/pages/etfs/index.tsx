import { Box, Container, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import { SearchBox, SymbolsList, SymbolsTable } from '@src/components/molecules';
import { Layout } from '@src/components/templates';
import { useAllSymbol } from '@src/hooks/useAllSymbol';
import useSymbolsFilter from '@src/hooks/useSymbolsFilter';
import { TypeSymbolExplains } from '@src/types';
import { GetStaticProps } from 'next';
import { ChangeEvent, memo } from 'react';

type Props = { symbols: TypeSymbolExplains };

const ETFs: React.FC<Props> = (props) => {
  const { keyword, setKeyword, filteredSymbols } = useSymbolsFilter(props);

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);
  const onClickDelete = () => setKeyword('');

  return (
    <Layout title='ETF一覧'>
      <Container maxW={'max-content'}>
        <Heading size='lg' p={2} m={2} borderBottom={'double'}>
          ETF一覧
        </Heading>
        <VStack>
          <Text>TICKER / タグ / 類似するETF などフィルター</Text>
          <SearchBox
            placeholder={'キーワード'}
            value={keyword}
            onChange={onChangeKeyword}
            onClick={onClickDelete}
          />
        </VStack>
        <Divider p={2} m={2} borderBottom={'double'} />
        <Box display={{ base: 'none', md: 'block' }}>
          <SymbolsTable symbols={filteredSymbols} />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <SymbolsList symbols={filteredSymbols} />
        </Box>
      </Container>
    </Layout>
  );
};
export default memo(ETFs);

export const getStaticProps: GetStaticProps = async () => {
  const { getAllSymbolsExplain } = useAllSymbol();
  const symbols = await getAllSymbolsExplain();
  return {
    props: { symbols },
    revalidate: 3,
  };
};
