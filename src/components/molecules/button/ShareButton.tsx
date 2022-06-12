import { HeaderIconButton } from '@src/components/atoms';
import { memo } from 'react';
import { FiShare2 } from 'react-icons/fi';

type Props = {
  onClick?: () => void;
};

const ShareButton: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <HeaderIconButton label='Share Page' onClick={onClick}>
      <FiShare2 />
    </HeaderIconButton>
  );
};

export default memo(ShareButton);
