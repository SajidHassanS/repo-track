"use client";
import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Data",
        data: [8, 12, 4, 10, 6],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4, // This will make the line more curved
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Ensures the chart can be responsive
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative h-64">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
