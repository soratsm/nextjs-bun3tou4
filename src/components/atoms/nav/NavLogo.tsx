import { Flex, Image } from '@chakra-ui/react';
import { Link } from '@src/components/atoms';
import { memo } from 'react';

const NavLogo = () => {
  return (
    <Link href={'/'} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex height='20'>
        <Image src='/images/header.png' />
      </Flex>
    </Link>
  );
};

export default memo(NavLogo);
