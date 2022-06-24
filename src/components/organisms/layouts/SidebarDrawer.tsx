import { Drawer, DrawerBody, DrawerContent, DrawerProps } from '@chakra-ui/react';
import { SideNavbar } from '@src/components/organisms';
import { memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarDrawer: React.FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <SDrawer
      autoFocus={false}
      isOpen={isOpen}
      onClose={onClose}
      returnFocusOnClose={true}
      onOverlayClick={onClose}
    >
      <DrawerContent>
        <DrawerBody p={0}>
          <SideNavbar />
        </DrawerBody>
      </DrawerContent>
    </SDrawer>
  );
};

export default memo(SidebarDrawer);

// style
const SDrawer: React.FC<DrawerProps> = (props) => {
  return <Drawer preserveScrollBarGap placement='left' {...props} />;
};
