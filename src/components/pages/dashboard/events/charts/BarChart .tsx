import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const chartData = {
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "100%",
        width: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
      colors: ["#3b5998"],
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              width: "100%",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="bar-chart" style={{ width: "100%" }}>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default BarChart;
