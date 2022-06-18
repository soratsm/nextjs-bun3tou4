import { Center, Img } from '@chakra-ui/react';
import { Layout, Simulation } from '@src/components/templates';
import { useAllSymbol } from '@src/hooks/useAllSymbol';
import { TypeSymbolExplains } from '@src/types';
import { GetStaticProps } from 'next';

type Props = {
  symbols: TypeSymbolExplains;
};

const Index: React.FC<Props> = (props) => {
  const { symbols } = props;

  return (
    <Layout>
      <Center h={'fit-content'} bgColor={'sub3'}>
        <Img maxH={'500px'} src='images/logo_transparent.png' />
      </Center>
      <Simulation symbols={symbols} />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { getAllSymbolsExplain } = useAllSymbol();
  const symbols = await getAllSymbolsExplain();
  return {
    props: { symbols },
    revalidate: 3,
  };
};
