import React from "react";
import { useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  forecastSelector,
  errorSelector,
} from "./features/counter/weatherSlice";

const Chart = () => {
  const forecast = useSelector(forecastSelector);
  const error = useSelector(errorSelector);
  return (
    <>
      {error && <p style={{ color: "#ff0033" }}>{error}</p>}
      {!error && forecast.length === 0 && (
        <p>Search for a city for chart to appear</p>
      )}
      {!error && forecast.length !== 0 && (
        <ResponsiveContainer width="80%" height="80%">
          <BarChart
            width={500}
            height={300}
            data={forecast}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Temperature" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default React.memo(Chart);
