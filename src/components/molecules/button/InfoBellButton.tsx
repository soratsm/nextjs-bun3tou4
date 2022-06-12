import { HeaderIconButton } from '@src/components/atoms';
import { memo } from 'react';
import { FiBell } from 'react-icons/fi';

type Props = {
  onClick?: () => void;
};

const InfoBellButton: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <HeaderIconButton onClick={onClick} label='info menu'>
      <FiBell />
    </HeaderIconButton>
  );
};

export default memo(InfoBellButton);
