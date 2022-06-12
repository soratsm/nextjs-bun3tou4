import { ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics, usePageView } from '@src/lib/gtag';
import theme from '@src/theme/theme';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <ChakraProvider resetCSS theme={theme}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
