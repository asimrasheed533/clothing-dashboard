import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={10}
        height={40}
        data={data}
        margin={{
          left: -10,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#9F9F9F" strokeDasharray="5 5" />
        <Bar type="monotone" dataKey="uv" stroke="red" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
