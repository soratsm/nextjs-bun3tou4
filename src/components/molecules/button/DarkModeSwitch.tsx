import { useColorMode } from '@chakra-ui/react';
import { HeaderIconButton } from '@src/components/atoms';
import { memo } from 'react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HeaderIconButton label='Toggle Color Mode' onClick={toggleColorMode}>
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </HeaderIconButton>
  );
};

export default memo(DarkModeSwitch);
