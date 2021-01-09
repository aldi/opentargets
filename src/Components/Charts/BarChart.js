import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({ labels, title, values }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: 'rgba(52, 137, 202, 1)',
      },
    ],
  };
  const chartOptions = {
    legend: {
      display: false,
    },
    title: {
      display: true,
      fontSize: 16,
      text: title,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'score',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Data type',
          },
        },
      ],
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

export default BarChart;
