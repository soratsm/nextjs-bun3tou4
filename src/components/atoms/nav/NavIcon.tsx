import { Icon } from '@chakra-ui/react';
import { memo } from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
};

const NavIcon: React.FC<Props> = (props) => {
  const { icon } = props;
  return (
    <Icon
      mr='4'
      fontSize='16'
      _groupHover={{
        color: 'white',
      }}
      as={icon}
    />
  );
};

export default memo(NavIcon);
