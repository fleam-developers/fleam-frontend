import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'

import "./CreatorStatistics.scss";

export default function BarChart() {
  const [counts, setCounts] = useState([4, 2, 6, 7, 5, 5, 13]);

  return (
    <div>
      <Bar
        className="bar"
        data={{
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [
            {
              label: "Participants",
              backgroundColor: ["rgba(0, 0, 255, 1)", "rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"],
              data: counts,
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ` },
        }}
      />
    </div>
  );
}
