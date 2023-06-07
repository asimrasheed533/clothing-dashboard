import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Chart() {
  const data = [
    {
      name: "jun",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 2590,
      pv: 3300,
      amt: 1100,
    },
    {
      name: "Aug",
      uv: 1500,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 1090,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        width={10}
        height={40}
        data={data}
        margin={{
          left: -10,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <CartesianGrid stroke="#9F9F9F" strokeDasharray="5 5" /> */}

        <Bar dataKey="uv" fill="#black" />
      </BarChart>
    </ResponsiveContainer>
  );
}
