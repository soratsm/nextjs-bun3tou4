import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/noto-sans-jp';

const fonts = {
  heading:
    '-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Segoe UI, Noto Sans JP, sans-serif',
  body: 'Noto Sans JP, sans-serif',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  semanticTokens: {
    colors: {
      base6: '#bbe3f5',
      accent1: '#da6a38',
      sub3: '#254678',
      bgPrimary: {
        default: 'gray.200',
        _dark: 'gray.900',
      },
      bgSecondary: {
        default: 'whiteAlpha.400',
        _dark: 'gray.700',
      },
      bgBase6: {
        default: 'base6',
        _dark: 'gray.900',
      },
      bgList: {
        default: 'base6',
        _dark: 'sub3',
      },
      textPrimary: {
        default: 'gray 800',
        _dark: 'white',
      },
      textSecondary: {
        default: 'gray.600',
        _dark: 'gray.200',
      },
      borderAccent1: {
        default: 'accent1',
        _dark: 'gray.700',
      },
    },
  },
  fonts,
  breakpoints,
});

export default theme;
