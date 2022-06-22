import { useClipboard, useToast } from '@chakra-ui/react';
import { memo } from 'react';
import { PrimaryButton } from '..';

type Props = {
  url: string;
};

const ShareCopyButton: React.FC<Props> = (props) => {
  const { url } = props;
  const toast = useToast();
  const { onCopy } = useClipboard(url);
  const onClickCopy = () => {
    onCopy();
    console.log(url);
    toast({
      title: 'クリップボードにコピーしました',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
  };
  return (
    <>
      <PrimaryButton onClick={onClickCopy}>URLをコピー</PrimaryButton>
    </>
  );
};

export default memo(ShareCopyButton);
