import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

export const useInquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const toast = useToast();

  const validateEmailFormat = useCallback((email: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }, []);

  const validateRequiredInput = useCallback((...args: string[]) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === '') {
        isBlank = true;
      }
    }
    return isBlank;
  }, []);

  const displayToast = useCallback((props: UseToastOptions) => {
    toast({
      title: props.title,
      status: props.status,
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
  }, []);

  // Slackに問い合わせがあったことを通知する
  const submitForm = useCallback(() => {
    const isBlank = validateRequiredInput(name, email, description);
    const isValidEmail = validateEmailFormat(email);

    if (isBlank) {
      displayToast({ title: '必須入力欄が空白です。', status: 'error' });
      return false;
    } else if (!isValidEmail) {
      displayToast({ title: 'メールアドレスの書式が異なります。', status: 'error' });
      return false;
    } else {
      const payload = {
        text:
          '■■■お問い合わせがありました■■■\n' +
          '■問い合わせカテゴリー\n' +
          category +
          '\n' +
          '■発信者\n' +
          'お名前: ' +
          name +
          '\n' +
          'メールアドレス: ' +
          email +
          '\n' +
          '■問い合わせ内容\n' +
          description,
      };
      // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
      fetch(process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL as string, {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(() => {
        displayToast({
          title: '送信が完了しました。追ってご連絡いたします。',
          status: 'success',
        });
        setDescription('');
        setEmail('');
        setName('');
      });
    }
  }, [name, email, description]);
  return {
    name,
    setName,
    email,
    setEmail,
    description,
    setDescription,
    category,
    setCategory,
    submitForm,
  };
};
