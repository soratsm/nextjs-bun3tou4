import { Tag, TagProps } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  tags: string;
};

const CSTag: React.FC<Props> = (props) => {
  const { tags } = props;
  return <>{tags ? tags.split(/,/g).map((tag, key) => <STag key={key}>{tag}</STag>) : <></>}</>;
};

export default memo(CSTag);

// style
const STag: React.FC<TagProps> = (props) => (
  <Tag size={'md'} mr={'2'} variant='solid' colorScheme={'orange'} {...props} />
);
