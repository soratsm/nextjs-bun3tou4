import {
  Button,
  Center,
  HStack,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SimulationAmount } from '@src/store/SimulationAmount';
import { memo } from 'react';
import { useRecoilState } from 'recoil';

const AmountInput = () => {
  const [amount, setAmount] = useRecoilState(SimulationAmount);

  return (
    <Center>
      <VStack mb={'5'}>
        <Text fontWeight={'bold'} m={'1'}>
          ■ Step 1 : 総投資金額を設定
        </Text>
        <HStack>
          <Button
            onClick={() =>
              setAmount((prevAmount) => (prevAmount >= 10000 ? 10000 : prevAmount + 50))
            }
          >
            +
          </Button>
          <NumberInput
            size='md'
            maxW={24}
            onChange={(valueString, _) =>
              setAmount(/\+|\-/.test(valueString) || valueString === '' ? 50 : Number(valueString))
            }
            value={amount}
            step={50}
            min={50}
            max={10000}
          >
            <NumberInputField />
          </NumberInput>
          <Text> 万円</Text>
          <Button
            onClick={() => setAmount((prevAmount) => (prevAmount <= 50 ? 50 : prevAmount - 50))}
          >
            -
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default memo(AmountInput);
