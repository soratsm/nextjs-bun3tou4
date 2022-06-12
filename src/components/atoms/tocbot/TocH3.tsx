import { Heading, HeadingProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const TocH3: React.FC<Props> = (props) => {
  const { children } = props;
  return <SHeading>{children}</SHeading>;
};

export default memo(TocH3);

// style
const SHeading: React.FC<HeadingProps> = (props) => {
  return (
    <Heading as={'h3'} size={'md'} mb={1} pb={1} id={props.children.toLocaleString()} {...props} />
  );
};
