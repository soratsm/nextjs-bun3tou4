import { VStack } from '@chakra-ui/react';
import { ErrorText, PrimaryButton } from '@src/components/atoms';
import { SimulationAmount } from '@src/store/SimulationAmount';
import { SimulationTotalPer } from '@src/store/SimulationTotalPer';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

type Props = {
  onClick: () => Promise<void>;
  error: any;
};

const GenerateButton: React.FC<Props> = (props) => {
  const { onClick, error } = props;
  const amount = useRecoilValue(SimulationAmount);
  const totalPer = useRecoilValue(SimulationTotalPer);
  const isAmountWithinRange = amount >= 50 && amount <= 10000;
  const isTotalWithinRange = totalPer > 0 && totalPer <= 100;

  return (
    <VStack>
      <PrimaryButton
        disabled={!isAmountWithinRange || !isTotalWithinRange || error}
        onClick={onClick}
      >
        計算
      </PrimaryButton>
      <ErrorText badConditions={!isAmountWithinRange}>
        ※総投資金額は 50 ～ 10,000 の間で設定してください
      </ErrorText>
      <ErrorText badConditions={!isTotalWithinRange}>
        ※総投資比率は 0 ～ 100 の間で設定してください
      </ErrorText>
      <ErrorText badConditions={error}>
        取得時にエラーが発生しました。しばらく経ってから再度操作を行ってください
      </ErrorText>
    </VStack>
  );
};

export default memo(GenerateButton);
