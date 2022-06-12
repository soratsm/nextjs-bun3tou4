import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { Link } from '@src/components/atoms';
import { memo } from 'react';

const Footer = () => {
  const today = new Date();
  return (
    <SFlex>
      <Link
        href={'/privacy-policy'}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        プライバシーポリシー
      </Link>
      <Text>{`© ${today.getFullYear()} ${
        process.env.NEXT_PUBLIC_TITLE
      }. All rights reserved`}</Text>
    </SFlex>
  );
};
export default memo(Footer);

// style
const SFlex: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height={{ base: 20, md: 12 }}
      bg={'gray.700'}
      color={'gray.200'}
      borderTopWidth='1px'
      borderTopColor={'borderAccent1'}
      alignItems='center'
      direction={{ base: 'column', md: 'row' }}
      justify={{ base: 'center', md: 'space-between' }}
      gap='2'
      {...props}
    />
  );
};
