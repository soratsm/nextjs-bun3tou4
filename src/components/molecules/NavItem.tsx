import { NavFlex, NavIcon, NavLink } from '@src/components/atoms';
import { memo } from 'react';
import { IconType } from 'react-icons';

type Props = {
  href: string;
  icon: IconType;
  children: React.ReactNode;
};

const NavItem: React.FC<Props> = (props) => {
  const { href, icon, children } = props;
  return (
    <NavLink href={href}>
      <NavFlex>
        {icon && <NavIcon icon={icon} />}
        {children}
      </NavFlex>
    </NavLink>
  );
};

export default memo(NavItem);
