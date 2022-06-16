import { Box, Container, Heading, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { Answers, Questions } from '@prisma/client';
import { AnswersList, Chats, FormModal } from '@src/components/organisms';
import { Layout } from '@src/components/templates';
import { useInquiry } from '@src/hooks/useInquiry';
import prisma from '@src/lib/prisma';
import { GetServerSideProps } from 'next';
import { memo } from 'react';

type Props = {
  dataset: (Questions & {
    answers: Answers[];
  })[];
};

const Inquiry: React.FC<Props> = (props) => {
  const { dataset } = props;
  const { answers, chats, onClickAnswer, isOpen, onClose } = useInquiry(dataset);
  return (
    <Layout title='問い合わせ'>
      <Container w={{ base: '100%', lg: '3xl' }} h={'max-content'}>
        <Heading size='lg' p={2} m={2} borderBottom={'double'}>
          問い合わせ
        </Heading>
        <Box p={'3'} m={'3'} minH={'md'} bgColor={'bgSecondary'}>
          {chats.length ? (
            <>
              <Chats chats={chats} />
              <AnswersList answers={answers} onClickAnswer={onClickAnswer} />
              <FormModal
                lastChat={chats[chats.length - 1].text}
                isOpen={isOpen}
                onClose={onClose}
              />
            </>
          ) : (
            <>
              <SkeletonCircle size='10' />
              <SkeletonText mt='10' noOfLines={4} spacing='4' />
            </>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default memo(Inquiry);

export const getServerSideProps: GetServerSideProps = async () => {
  const dataset = await prisma.questions.findMany({
    where: {
      deleted: false,
    },
    include: {
      answers: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  });
  return {
    props: {
      dataset,
    },
  };
};
