import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Input } from '@chakra-ui/react';
import { PrimaryButton } from '@src/components/atoms';
import { ChangeEvent, memo } from 'react';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const SearchBox: React.FC<Props> = (props) => {
  const { placeholder, value, onChange, onClick } = props;

  return (
    <Box mb={'2'}>
      <Flex>
        <Input variant={'filled'} placeholder={placeholder} value={value} onChange={onChange} />
        <PrimaryButton onClick={onClick}>
          <CloseIcon />
        </PrimaryButton>
      </Flex>
    </Box>
  );
};

export default memo(SearchBox);
