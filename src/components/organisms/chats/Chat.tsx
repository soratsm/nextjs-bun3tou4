import { Avatar, Box, BoxProps, Flex } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  text: string;
  isQuestion: boolean;
};

const Chat: React.FC<Props> = (props) => {
  const { text, isQuestion } = props;

  return (
    <Flex sx={isQuestion ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>
      {isQuestion ? (
        <>
          <Avatar name='Robo' src={'images/Robo.png'} />
          <SBox bg={'bgPrimary'} ml={'2'} color={'textSecondary'}>
            {text}
          </SBox>
        </>
      ) : (
        <>
          <Avatar name='Icon' src={'images/no-profile.png'} />
          <SBox bg={'bgBase6'} mr={'2'} color={'textPrimary'}>
            {text}
          </SBox>
        </>
      )}
    </Flex>
  );
};

export default memo(Chat);

// style
const SBox: React.FC<BoxProps> = (props) => {
  return <Box borderRadius={'md'} p={'3'} my={'1'} maxW={'80%'} w={'auto'} {...props} />;
};
