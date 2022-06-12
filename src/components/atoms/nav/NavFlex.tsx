import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const NavFlex: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Flex
      align='center'
      p='4'
      mx='4'
      borderRadius='lg'
      cursor='pointer'
      _hover={{
        bg: 'sub3',
        color: 'white',
      }}
    >
      {children}
    </Flex>
  );
};

export default memo(NavFlex);
