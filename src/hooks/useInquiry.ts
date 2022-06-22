import { useDisclosure } from '@chakra-ui/react';
import { Answers, Questions } from '@prisma/client';
import { TypeChats } from '@src/types';
import { useCallback, useEffect, useState } from 'react';

type Props = (Questions & {
  answers: Answers[];
})[];

/**
 * チャットボットとのやり取りを一つの仮想配列に見立て、追加していく
 */
export const useInquiry = (props: Props) => {
  const [answers, setAnswers] = useState<Answers[]>([]);
  const [answer, setAnswer] = useState('');
  const [chats, setChats] = useState<TypeChats[]>([]);
  const [currentId, setCurrentId] = useState('init');

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // ユーザーチャット
    const answerChats =
      answer === '' || currentId === 'init'
        ? [...chats]
        : [...chats, { text: answer, isQuestion: false }];
    setChats(answerChats);

    // ボットチャット
    if (props.length) {
      setTimeout(() => {
        // currentIdに一致したidのindexを取得する
        const passIndex = props.findIndex(function (element) {
          return element.id === currentId;
        });
        // ボットチャットの投稿と次の回答を表示
        const questionChats = [
          ...answerChats,
          { text: props[passIndex].question, isQuestion: true },
        ];
        setChats(questionChats);
        setAnswers(props[passIndex].answers);
      }, 300);
    }
  }, [currentId, props]);

  // 回答をクリックした際にnextIdの値により処理を振り分け
  const onClickAnswer = useCallback((answer: Answers) => {
    if (answer.nextId === 'contact') {
      onOpen();
    } else if (/^https:*/.test(answer.nextId)) {
      // リンクなら別タブで開く
      const a = document.createElement('a');
      a.href = answer.nextId;
      a.target = '_blank';
      a.click();
    } else {
      setAnswer(answer.content);
      setCurrentId(answer.nextId);
    }
  }, []);
  return {
    answers,
    chats,
    onClickAnswer,
    isOpen,
    onClose,
  };
};
