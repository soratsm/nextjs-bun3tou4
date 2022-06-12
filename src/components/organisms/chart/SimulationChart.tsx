import { Center, useColorModeValue } from '@chakra-ui/react';
import { SimulationResult } from '@src/types';
import { memo, useState } from 'react';
import { Cell, Pie, PieChart, Sector } from 'recharts';

type Props = {
  items: SimulationResult[];
};

// https://recharts.org/en-US
const SimulationChart: React.FC<Props> = (props) => {
  const { items } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const COLORS = [
    'rgb(81, 136, 177)',
    'rgb(244, 156, 45)',
    'rgb(174, 210, 101)',
    'rgb(240, 132, 55)',
    'rgb(201, 194, 224)',
    'rgb(204, 153, 102)',
    'rgb(243, 167, 172)',
    'rgb(204, 204, 204)',
    'rgb(243, 222, 185)',
    'rgb(192, 228, 242)',
  ];
  const stringColor = useColorModeValue('#21262d', '#fafbfc');
  const onPieEnter = (_, index: number) => setActiveIndex(index);

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } =
      props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const nameSplit: string[] = payload.name.split(/ |-/g);

    return (
      <g>
        <text x={cx} y={cy} textAnchor='middle' fill={stringColor}>
          {`${payload.per}%`}
        </text>
        <text x={cx} y={cy} dy={18} textAnchor='middle' fill={stringColor}>
          {`(${payload.value}万円)`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
        {/* mapでの読み込みが上手くいかないため個別記載 */}
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={stringColor}>
          {nameSplit[0]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 1}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[1]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 2}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[2]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 3}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[3]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 4}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[4]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 5}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[5]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 6}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[6]}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={16 * 7}
          textAnchor={textAnchor}
          fill={stringColor}
        >
          {nameSplit[7]}
        </text>
      </g>
    );
  };

  return (
    <Center>
      <PieChart width={450} height={250}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={items}
          cx='50%'
          cy='50%'
          innerRadius={60}
          outerRadius={80}
          dataKey='value'
          onMouseEnter={onPieEnter}
          paddingAngle={1}
        >
          {items.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Center>
  );
};

export default memo(SimulationChart);
