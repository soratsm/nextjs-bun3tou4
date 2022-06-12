import {
  Center,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SimulationChart } from '@src/components/organisms';
import { GenerateButton, SimulationTable } from '@src/components/molecules';
import { useCreateInput } from '@src/hooks/useCreateInput';
import { useCreateOutput } from '@src/hooks/useCreateOutput';
import { InvestmentItem } from '@src/types';
import { memo } from 'react';

type Props = {
  investmentList: InvestmentItem[];
};

const GenerateSimulation: React.FC<Props> = (props) => {
  const { data, error, onClickGenerate, organizedInvestmentList } = useCreateInput(props);
  const { recalCountry, recalHold, recalSection } = useCreateOutput({
    data,
    organizedInvestmentList,
  });

  return (
    <Center>
      <VStack mb={'5'}>
        <Text fontWeight={'bold'} m={'1'}>
          ■ Step 3 : 資産の分散状況を確認
        </Text>
        <VStack>
          <GenerateButton onClick={onClickGenerate} error={error} />
          {!data && organizedInvestmentList.length > 0 ? <Spinner /> : <></>}
          {data ? (
            <Tabs isFitted variant='enclosed'>
              <TabList mb='1em'>
                <Tab>国</Tab>
                <Tab>銘柄</Tab>
                <Tab>分野</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SimulationChart items={recalCountry} />
                  <SimulationTable items={recalCountry} caption={'投資対象分散（国）'} />
                </TabPanel>
                <TabPanel>
                  <SimulationChart items={recalHold} />
                  <SimulationTable items={recalHold} caption={'投資銘柄分散'} />
                </TabPanel>
                <TabPanel>
                  <SimulationChart items={recalSection} />
                  <SimulationTable items={recalSection} caption={'投資対象分散（分野）'} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <></>
          )}
        </VStack>
      </VStack>
      {/* <Button onClick={onClick}>確認</Button> */}
    </Center>
  );
};

export default memo(GenerateSimulation);
