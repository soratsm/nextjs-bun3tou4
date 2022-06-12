import { Heading, HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const TocH2: React.FC<Props> = (props) => {
  const { children } = props;
  return <SHeading>{children}</SHeading>;
};

export default memo(TocH2);

// style
const SHeading: React.FC<HeadingProps> = (props) => {
  return <Heading size={'lg'} mb={1} pb={1} id={props.children.toLocaleString()} {...props} />;
};
