import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, LinkBox, LinkBoxProps, LinkOverlay, Text } from '@chakra-ui/react';
import { CSTag } from '@src/components/atoms';
import { TypeSymbolExplains } from '@src/types';
import { memo } from 'react';

type Props = { symbols: TypeSymbolExplains };

const SymbolsList: React.FC<Props> = (props) => {
  const { symbols } = props;
  return (
    <Box>
      {symbols.map((symbol, key) => (
        <SLinkBox key={key} bg={key % 2 && 'bgList'}>
          <Heading size='md' my='2'>
            <Flex>
              <LinkOverlay href={`/etfs/${symbol.id}`} flex={'9'}>
                {symbol.id}
              </LinkOverlay>
              <ChevronRightIcon flex={'1'} />
            </Flex>
          </Heading>
          <CSTag tags={symbol.explain.tags} />
          {symbol.explain.comment ? (
            <Text mb='1'>{symbol.explain.comment}</Text>
          ) : (
            <Text mb='1'>{symbol.explain.summary || '-'}</Text>
          )}
        </SLinkBox>
      ))}
    </Box>
  );
};

export default memo(SymbolsList);

// style
const SLinkBox: React.FC<LinkBoxProps> = (props) => {
  return (
    <LinkBox
      maxW='full'
      p='2'
      m='1'
      borderWidth='thin'
      rounded='md'
      _hover={{ borderColor: 'accent1', boxShadow: 'lg' }}
      {...props}
    />
  );
};
