import { Button, ButtonProps, Flex, FlexProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const HeaderIconButton: React.FC<Props> = (props) => {
  const { label, children, onClick } = props;

  return (
    <SFlex>
      <SButton aria-label={label} onClick={onClick}>
        {children}
      </SButton>
    </SFlex>
  );
};

export default memo(HeaderIconButton);

// style
const SFlex: React.FC<FlexProps> = (props) => {
  return <Flex justifyContent='center' alignItems='center' {...props} />;
};

const SButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      _focus={{ boxShadow: 'none' }}
      _hover={{
        bg: 'sub3',
        color: 'white',
      }}
      size='lg'
      variant='ghost'
      {...props}
    />
  );
};
