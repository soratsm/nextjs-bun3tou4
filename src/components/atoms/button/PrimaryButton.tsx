import { Button, ButtonProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const PrimaryButton: React.FC<Props> = (props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <SButton disabled={disabled || loading} isLoading={loading} onClick={onClick}>
      {children}
    </SButton>
  );
};

export default memo(PrimaryButton);

// style
const SButton: React.FC<ButtonProps> = (props) => (
  <Button
    bg='sub3'
    color='white'
    _focus={{ boxShadow: 'none' }}
    variant='solid'
    _hover={{ opacity: 0.8 }}
    {...props}
  />
);
