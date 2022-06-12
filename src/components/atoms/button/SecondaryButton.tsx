import { Button, ButtonProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const SecondaryButton: React.FC<Props> = (props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <SButton disabled={disabled || loading} isLoading={loading} onClick={onClick}>
      {children}
    </SButton>
  );
};

export default memo(SecondaryButton);

// style
const SButton: React.FC<ButtonProps> = (props) => (
  <Button
    _focus={{ boxShadow: 'none' }}
    variant='ghost'
    _hover={{ opacity: 0.8, bg: 'sub3', color: 'white' }}
    {...props}
  />
);
