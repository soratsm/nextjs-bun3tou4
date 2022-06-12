import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { memo, useEffect } from 'react';
import { BiBookContent } from 'react-icons/Bi';
import tocbot from 'tocbot';

export const Tocbot: React.FC = () => {
  const bg = useColorModeValue('#fafbfc', '#21262d');
  const border = useColorModeValue('1px solid rgba(27,31,35,0.15)', '1px solid #30363d');

  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.body',
      headingSelector: ' h2, h3',
      orderedList: false,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <Box
        border={border}
        bgColor={'bgSecondary'}
        borderRadius={'0.25rem'}
        p={4}
        m={'auto'}
        w={'full'}
        maxW={{ base: 'md', md: 'xl' }}
      >
        <Flex justify={'center'} alignItems={'center'} borderBottom={'2px'}>
          <BiBookContent />
          <Text pl={1} fontWeight={'bold'}>
            もくじ
          </Text>
        </Flex>
        <Box
          className='toc'
          fontSize={'sm'}
          sx={{
            '.toc-list': {
              pl: '6',
              pt: '2',
            },
            '.toc-list-item': {
              pb: '2',
            },
            '.toc-list-item:last-child': {
              pb: 0,
            },
            '.toc-link': {
              color: 'textSecondary',
            },
            '.is-active-link': {
              color: 'textPrimary',
              fontWeight: 700,
            },
          }}
        />
      </Box>
    </>
  );
};

export default memo(Tocbot);
