import {
  Box,
  Container,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Tocbot, TocH2 } from '@src/components/atoms';
import {
  SymbolBaseData,
  SymbolCountryTable,
  SymbolHoldTable,
  SymbolSectionTable,
  SymbolSummaryData,
} from '@src/components/molecules';
import { Layout } from '@src/components/templates';
import { useAllSymbol } from '@src/hooks/useAllSymbol';
import { TypeSymbolDetail } from '@src/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

type Props = { symbolDetail: TypeSymbolDetail };

const ETFDetail: React.FC<Props> = (props) => {
  const { symbolDetail } = props;
  const router = useRouter();
  const title = router.query.id as string;

  //  ISR（インクリメンタル静的再生成）対策
  if (!router.isFallback && !symbolDetail?.id) {
    return (
      <Layout>
        <Error statusCode={404} title={title} />;
      </Layout>
    );
  }

  return (
    <Layout title={title}>
      <Container maxW={'max-content'}>
        <Box borderBottom={'double'} mb={5} pb={5}>
          <TocH2>{symbolDetail.id}</TocH2>
          <Text>{symbolDetail.explain.name}</Text>
        </Box>
        <Box borderBottom={'double'} mt={5}>
          <SymbolSummaryData explain={symbolDetail.explain} />
          <VStack>
            <SymbolBaseData explain={symbolDetail.explain} />
          </VStack>
        </Box>
      </Container>{' '}
      <VStack>
        <Tabs isFitted variant='enclosed'>
          <TabList mt='2em'>
            <Tab>国</Tab>
            <Tab>銘柄</Tab>
            <Tab>分野</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SymbolCountryTable country={symbolDetail.country} />
            </TabPanel>
            <TabPanel>
              <SymbolHoldTable hold={symbolDetail.hold} />
            </TabPanel>
            <TabPanel>
              <SymbolSectionTable section={symbolDetail.section} />
            </TabPanel>
          </TabPanels>
        </Tabs>{' '}
      </VStack>
      <Text>{`データ取得日 : ${symbolDetail.update_at}`}</Text>
    </Layout>
  );
};
export default ETFDetail;

// SSG（静的サイト生成）
export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllSymbolIds } = useAllSymbol();
  const paths = await getAllSymbolIds();
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { getSymbolDetail } = useAllSymbol();
  const symbolDetail = await getSymbolDetail(ctx.params.id as string);
  return {
    props: {
      symbolDetail: {
        ...symbolDetail,
      },
    },
    notFound: !symbolDetail,
    revalidate: 3,
  };
};
