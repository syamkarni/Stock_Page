import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const StockChart = ({ graphData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: graphData.map(data => new Date(data[0] * 1000).toLocaleDateString()),
        datasets: [{
          label: 'Stock Value',
          data: graphData.map(data => data[1]),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          yAxes: [{ ticks: { beginAtZero: true } }],
          xAxes: [{ type: 'time', time: { unit: 'day' } }]
        }
      }
    });
    return () => chart.destroy();
  }, [graphData]);

  return <canvas ref={chartRef} />;
};

export default StockChart;
