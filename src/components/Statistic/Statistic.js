import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowStatistic from "../../ShowStatistic/ShowStatistic";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div>
      <BarChart width={500} height={400} data={data.data}>
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Statistic;
