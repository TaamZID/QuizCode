import React from "react";
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

const ShowStatistic = ({ showStatistic }) => {
  const { name, total } = showStatistic;
  return (
    <div>
      {/* <p>{name}</p>
      <p>{total}</p> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={name}>
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShowStatistic;
