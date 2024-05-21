import React from "react";
import StatsCard from "./StatsCard";
import { statsData } from "@/utils/constants";
import LineChart from "./JobsChart";

import PackagesOverview from "./SubscriptionChart";
import TimeFilter from "@/components/TimeFilter";

export default function Home() {
  return (
    <>
      {" "}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Business Analytics</h1>
          <TimeFilter />
        </div>
        {/* stats */}

        <div className="grid grid-cols-4 gap-4">
          {statsData.map(({ title, value, percentage, change, icon: Icon }) => (
            <StatsCard
              title={title}
              icon={Icon}
              value={value}
              change={change}
              percentage={percentage}
            />
          ))}
        </div>
        <LineChart />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
          
          </div>
          <PackagesOverview />
        </div>
      </div>
    </>
  );
}
