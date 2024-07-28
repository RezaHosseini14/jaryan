import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['اینستاگرام', 'تلگرام', 'یوتیوب', 'توییتر', 'وبسایت'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <div className="pie-chart h-full flex place-items-center">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={380}
      />
    </div>
  );
};

export default PieChart;
