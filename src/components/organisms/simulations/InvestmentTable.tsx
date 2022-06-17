import {
  Button,
  Center,
  HStack,
  NumberInput,
  NumberInputField,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { PrimaryButton } from '@src/components/atoms';
import { useSimulationInvestment } from '@src/hooks/useSimulationInvestment';
import { SimulationAmount } from '@src/store/SimulationAmount';
import { SimulationTotalPer } from '@src/store/SimulationTotalPer';
import { InvestmentItem, TypeSymbolExplains } from '@src/types';
import { memo, SetStateAction } from 'react';
import Select from 'react-select';
import { useRecoilValue } from 'recoil';

type Props = {
  symbols: TypeSymbolExplains;
  investmentList: InvestmentItem[];
  setInvestmentList: (value: SetStateAction<InvestmentItem[]>) => void;
};

const InvestmentTable: React.FC<Props> = (props) => {
  const { investmentList, idOptions, onClickAddButton, onChangeId, onClickPerButton, onChangePer } =
    useSimulationInvestment(props);
  const totalPer = useRecoilValue(SimulationTotalPer);
  const amount = useRecoilValue(SimulationAmount);
  const hiddenBreakpoint = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Center>
        <VStack mb={'5'}>
          <Text fontWeight={'bold'} m={'1'}>
            ■ Step 2 : 銘柄と比率を設定
          </Text>
          <PrimaryButton onClick={onClickAddButton}>リスト 追加</PrimaryButton>
          <TableContainer>
            <Table size={{ base: 'sm', md: 'md' }}>
              <Thead>
                <Tr bg={'bgList'}>
                  <Th>Ticker</Th>
                  <Th>比率</Th>
                  <Th>概算配当</Th>
                </Tr>
              </Thead>
              <Tbody>
                {investmentList.map((item, key) => (
                  <Tr key={key} bg={key % 2 && 'bgList'}>
                    <Td minW={'130px'} w={'200px'}>
                      <Select
                        id={`i${('000' + key).slice(-3)}`}
                        instanceId={`i${('000' + key).slice(-3)}`}
                        name={`i${('000' + key).slice(-3)}`}
                        defaultValue={item.id}
                        isClearable
                        escapeClearsValue
                        menuPosition={'fixed'}
                        options={idOptions}
                        onChange={onChangeId}
                        styles={{
                          option: (base) => ({
                            ...base,
                            borderBottom: '1px dotted gray',
                            color: '#1A202C',
                          }),
                        }}
                      />
                    </Td>
                    <Td>
                      <HStack>
                        <Button  hidden={hiddenBreakpoint} onClick={() => onClickPerButton(key, true)}>
                          +
                        </Button>
                        <NumberInput
                          size='sm'
                          w={20}
                          onChange={(valueString, _) => onChangePer(valueString, _, key)}
                          value={item.per}
                          step={0.5}
                          min={0}
                          max={100}
                          precision={1}
                        >
                          <NumberInputField />
                        </NumberInput>
                        <Text> %</Text>
                        <Button hidden={hiddenBreakpoint} onClick={() => onClickPerButton(key, false)}>
                          -
                        </Button>
                      </HStack>
                    </Td>
                    <Td>{`${((Number(item.per) / 100) * amount * (item.yield_per / 100)).toFixed(
                      1,
                    )} 万円`}</Td>
                  </Tr>
                ))}
                <Tr>
                  <Td>Other</Td>
                  <Td>
                    <HStack>
                      <Button  hidden={hiddenBreakpoint} isDisabled={true}>
                        +
                      </Button>
                      <NumberInput
                        size='sm'
                        w={20}
                        isDisabled={true}
                        value={100 - totalPer}
                        min={0}
                        max={100}
                        precision={1}
                      >
                        <NumberInputField />
                      </NumberInput>
                      <Text> %</Text>
                      <Button  hidden={hiddenBreakpoint} isDisabled={true}>
                        -
                      </Button>
                    </HStack>
                  </Td>
                  <Td>0.0 万円</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Center>
    </>
  );
};

export default memo(InvestmentTable);

// style
