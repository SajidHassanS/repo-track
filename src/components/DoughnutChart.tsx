"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Email Sent", "Received"],
  datasets: [
    {
      data: [2300, 274],
      backgroundColor: ["#36A2EB", "#FF6384"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384"],
    },
  ],
};

const DoughnutChart = () => (
  <div className="relative h-64 w-full max-w-sm mx-auto">
    <h2 className="text-lg font-semibold mb-4 text-center">
      Marketing Activity
    </h2>
    <Doughnut
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true,
      }}
      width={300}
      height={300}
    />
  </div>
);

export default DoughnutChart;
