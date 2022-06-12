import { Flex } from '@chakra-ui/react';
import { Answers } from '@prisma/client';
import { memo } from 'react';
import { Answer } from '..';

type Props = {
  answers: Pick<Answers, 'content' | 'nextId'>[];
  onClickAnswer: (answer: Pick<Answers, 'content' | 'nextId'>) => void;
};

const AnswersList: React.FC<Props> = (props) => {
  const { answers, onClickAnswer } = props;
  return (
    <Flex flexFlow={'column'} justifyContent={'flex-end'} h={'192px'}>
      {answers.map((answer, index) => (
        <Answer
          key={index.toString()}
          content={answer.content}
          onClick={() => onClickAnswer(answer)}
        />
      ))}
    </Flex>
  );
};

export default memo(AnswersList);
