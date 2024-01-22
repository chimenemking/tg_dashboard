"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

type Props = {};

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = (props: Props) => {
  return (
    <>
      {/* Add the area compnent and pass the data key as a prop */}
      {/* Wrappng  the chart in a responsive container helps to resize the enter chart and make it more responsive */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={400} data={productSales} margin={{right: 30}}>
          <YAxis/>
          <XAxis dataKey="name"/>
          <CartesianGrid strokeDasharray="5 5"/>

          <Tooltip content={<CustomTooltip/>}/>
          <Legend/>
          <Area
            type="monotone"
            dataKey="product1"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId={1}
          />

          <Area
            type="monotone"
            dataKey="product2"
            stroke="#7c3aed"
            fill="#9b82f6"
            stackId={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

// to use our customtooltip, we need to pass it to the tooltip component above as a prop

//active indicates if the tooltip is active or not,
//payload is an array of objects that contains the data for the tool tip
//label is the label of the data point.

const CustomTooltip: React.FC<any> = ({active, payload, label}) =>{
    if (active && payload && payload.length){
        return(
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Product 1:
                <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    product 2:
                <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        )
    }
};

export default AreaChartComponent;