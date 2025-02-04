"use client";

// components/JobsChart.js
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { useTimeFilter } from "@/context/TimeFilterProvider";

const JobsChart = () => {
  const { timeFilter } = useTimeFilter();

  const data = {
    weekly: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Jobs Completed",
          data: [10, 30, 50, 70, 60, 80, 40],
          fill: true, // Updated line
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          tension: 0.4,
        },
      ],
    },
    monthly: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Jobs Completed",
          data: Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 100)
          ),
          fill: true, // Updated line
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          tension: 0.4,
        },
      ],
    },
    yearly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Jobs Completed",
          data: Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * 100)
          ),
          fill: true, // Updated line
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          tension: 0.4,
        },
      ],
    },
    allTime: {
      labels: Array.from({ length: 5 }, (_, i) => `Year ${i + 1}`),
      datasets: [
        {
          label: "Jobs Completed",
          data: Array.from({ length: 5 }, () =>
            Math.floor(Math.random() * 100)
          ),
          fill: true, // Updated line
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          tension: 0.4,
        },
      ],
    },
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function ({ raw }: { raw: string }) {
            return raw + " Jobs Completed";
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-background rounded-lg">
      <h2 className="text-xl font-bold">Total revenue</h2>
      <div className="relative h-[359px] w-full">
        <Line
          data={data[timeFilter as keyof typeof data]}
          options={options as any}
        />
      </div>
    </div>
  );
};

export default JobsChart;
