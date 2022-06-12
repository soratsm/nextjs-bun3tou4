import { Button, ButtonProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  content: string;
  onClick: () => void;
};

const Answer: React.FC<Props> = (props) => {
  const { content, onClick } = props;
  return <SButton onClick={onClick}>{content}</SButton>;
};

export default memo(Answer);

// style
const SButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      w={'full'}
      mb={2}
      _focus={{ boxShadow: 'none' }}
      _hover={{
        bg: 'sub3',
        color: 'white',
      }}
      size='lg'
      variant={'solid'}
      border={'1px solid'}
      {...props}
    />
  );
};
