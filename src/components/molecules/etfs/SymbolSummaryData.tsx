import { Box, BoxProps, Text } from '@chakra-ui/react';
import { SymbolExplain } from '@prisma/client';
import { TocH3 } from '@src/components/atoms';
import { memo } from 'react';

type Props = {
  explain: SymbolExplain;
};

const SymbolSummaryData: React.FC<Props> = (props) => {
  const { id, summary, comment } = props.explain;

  return (
    <>
      <SBox>
        <TocH3>{`${id}とは`}</TocH3>
        <Text mb={1} pb={1}>
          {summary}
        </Text>
      </SBox>
      {comment ? (
        <SBox>
          <TocH3>所感</TocH3>
          <Text>{comment}</Text>
        </SBox>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(SymbolSummaryData);

// style
const SBox: React.FC<BoxProps> = (props) => {
  return <Box mb={3} pb={3} {...props} />;
};
