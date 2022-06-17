import { ButtonGroup, Flex, FlexProps, Spacer } from '@chakra-ui/react';
import { NavLogo } from '@src/components/atoms';
import { DarkModeSwitch, HumbugerButton } from '@src/components/molecules';
import { ShareModal } from '@src/components/organisms';
import { memo } from 'react';

type Props = {
  onOpen: () => void;
};

const Header: React.FC<Props> = (props) => {
  const { onOpen } = props;
  return (
    <SFlex>
      <HumbugerButton onClick={onOpen} />
      <NavLogo />
      <Spacer />
      <ButtonGroup>
        <ShareModal />
        {/* <InfoBellButton /> */}
        <DarkModeSwitch />
      </ButtonGroup>
    </SFlex>
  );
};

export default memo(Header);

// style
const SFlex: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      height='20'
      top={0}
      position='sticky'
      zIndex={'sticky'}
      bg={'bgBase6'}
      borderBottomWidth='1px'
      borderBottomColor={'borderAccent1'}
      minWidth='max-content'
      alignItems='center'
      {...props}
    />
  );
};
