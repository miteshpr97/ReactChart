import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
