import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { PrimaryButton, SecondaryButton } from '@src/components/atoms';
import { useInquiryForm } from '@src/hooks/useInquiryForm';
import { ChangeEvent, memo, useCallback, useEffect, useRef } from 'react';

type Props = {
  lastChat: string;
  isOpen: boolean;
  onClose: () => void;
};

/**
 * slackへ連携するためのフォーム
 */
const FormDialog: React.FC<Props> = (props) => {
  const { lastChat, isOpen, onClose } = props;
  const initialRef = useRef();
  const {
    name,
    setName,
    email,
    setEmail,
    description,
    setDescription,
    category,
    setCategory,
    submitForm,
  } = useInquiryForm();

  useEffect(() => {
    setCategory(lastChat.replace(/についてですね。.*/, ''));
  }, [lastChat]);

  const onChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName],
  );

  const onChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [setEmail],
  );

  const onChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    [setDescription],
  );

  const onClickSubmit = useCallback(() => {
    submitForm();
    onClose();
  }, [name, email, description]);

  return (
    <Modal preserveScrollBarGap initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>問い合わせフォーム</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>■問い合わせカテゴリー</FormLabel>
            <FormLabel>{category}</FormLabel>
            <FormLabel>■送信内容</FormLabel>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>名前(必須)</FormLabel>
            <Input
              placeholder='名前(必須)'
              ref={initialRef}
              type={'text'}
              value={name}
              onChange={onChangeName}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel htmlFor='email'>メールアドレス(必須)</FormLabel>
            <Input
              placeholder='メールアドレス(必須)'
              id='email'
              value={email}
              type={'email'}
              onChange={onChangeEmail}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>問い合わせ内容(必須)</FormLabel>
            <Textarea
              placeholder='問い合わせ内容(必須)'
              value={description}
              onChange={onChangeDescription}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <HStack>
            <PrimaryButton onClick={onClickSubmit}>送信する</PrimaryButton>
            <SecondaryButton onClick={onClose}>キャンセル</SecondaryButton>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(FormDialog);
