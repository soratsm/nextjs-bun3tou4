import { Link } from '@src/components/atoms';
import { memo } from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<Props> = (props) => {
  const { href, children } = props;
  return (
    <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      {children}
    </Link>
  );
};

export default memo(NavLink);
