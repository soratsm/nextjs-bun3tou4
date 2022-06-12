import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { SecondaryButton } from '@src/components/atoms';
import { ShareBox, ShareButton } from '@src/components/molecules';
import { memo } from 'react';

const ShareModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ShareButton onClick={onOpen} />

      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={'fill'} bg={'bgPrimary'}>
          <ModalHeader m={'auto'} borderBottom={'1px solid gray'}>
            {process.env.NEXT_PUBLIC_TITLE}をシェアする
          </ModalHeader>
          <ModalBody borderBottom={'1px solid gray'} p={3}>
            <ShareBox />
          </ModalBody>

          <ModalFooter>
            <SecondaryButton onClick={onClose}>閉じる</SecondaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(ShareModal);
