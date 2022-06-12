import { Box, List } from '@chakra-ui/react';
import { TypeChats } from '@src/types';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import { memo, useRef } from 'react';
import { Chat } from '..';

type Props = {
  chats: TypeChats[];
};

const Chats: React.FC<Props> = (props) => {
  const { chats } = props;

  // 自動スクロール
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  // useLayoutEffectを単純に使用するとNextJSでワーニング出すので、これを使う
  useIsomorphicLayoutEffect(() => {
    scrollBottomRef.current?.scrollIntoView();
  }, [chats]);

  return (
    <List maxW='full' overflow={'auto'}>
      {chats.map((chat, index) => (
        <Chat key={index} text={chat.text} isQuestion={chat.isQuestion} />
      ))}
      <Box ref={scrollBottomRef} />
    </List>
  );
};

export default memo(Chats);
