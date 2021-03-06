import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { memo } from 'react';

/**
 * ChakraUIのリンクはNextLinkではないのでラッピングすることで使用する
 */
const NextWrapLink: React.FC<LinkProps> = (props) => {
  const { href = '' } = props;
  return (
    <NextLink href={href}>
      <Link {...props} onClick={() => (document.activeElement as HTMLElement).blur()} />
    </NextLink>
  );
};

export default memo(NextWrapLink);
