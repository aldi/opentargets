import React from 'react';
import { Radar } from 'react-chartjs-2';

function RadarChart({ labels, title, values }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: 'rgba(52, 137, 202, 0.1)',
        borderColor: 'rgba(52, 137, 202, 1)',
        borderWidth: 2,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    title: {
      display: true,
      fontSize: 18,
      text: title,
    },
  };
  return <Radar data={chartData} options={chartOptions} />;
}

export default RadarChart;
