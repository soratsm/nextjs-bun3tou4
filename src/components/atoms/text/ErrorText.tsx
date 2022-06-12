import { Text, TextProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  badConditions: boolean;
  children: React.ReactNode;
};

const ErrorText: React.FC<Props> = (props) => {
  const { badConditions, children } = props;
  return badConditions ? <SText>{children}</SText> : <></>;
};

export default memo(ErrorText);

// style
const SText: React.FC<TextProps> = (props) => <Text color={'red'} {...props} />;
