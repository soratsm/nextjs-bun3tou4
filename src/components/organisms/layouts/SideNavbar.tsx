import { Box, BoxProps } from '@chakra-ui/react';
import { NavItem } from '@src/components/molecules';
import { LinkItem } from '@src/types';
import { memo } from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { FiHome, FiInfo, FiTrendingUp } from 'react-icons/fi';

const LinkItems: Array<LinkItem> = [
  { name: 'トップページ', icon: FiHome, href: '/' },
  { name: 'ETF一覧', icon: FiTrendingUp, href: '/etfs' },
  { name: '問い合わせ', icon: AiFillWechat, href: '/inquiry' },
  { name: `${process.env.NEXT_PUBLIC_TITLE}とは`, icon: FiInfo, href: '/info' },
];

interface Props extends BoxProps {}

const SideNavbar: React.FC<Props> = (props) => {
  const { ...rest } = props;
  return (
    <SBox {...rest}>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </SBox>
  );
};

export default memo(SideNavbar);

// style
const SBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      bg={'bgBase6'}
      borderRight='1px'
      borderRightColor={'borderAccent1'}
      minW={{ base: 'full', md: 60 }}
      pos={'fixed'}
      pt={5}
      h='full'
      {...props}
    />
  );
};
