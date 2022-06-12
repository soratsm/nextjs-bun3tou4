import { Box } from '@chakra-ui/react';
import { HeaderIconButton } from '@src/components/atoms';
import { memo } from 'react';
import { FiMenu } from 'react-icons/fi';

type Props = {
  onClick: () => void;
};

const HumbugerButton: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <Box display={{ base: 'flex', md: 'none' }}>
      <HeaderIconButton onClick={onClick} label='open menu'>
        <FiMenu />
      </HeaderIconButton>
    </Box>
  );
};

export default memo(HumbugerButton);
