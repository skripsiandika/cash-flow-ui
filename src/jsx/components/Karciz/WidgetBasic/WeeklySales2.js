import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WeeklySales2 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [25, 60, 30, 71, 26, 85, 50],
          borderColor: "rgba(245, 114, 32, 1)",
          borderWidth: "2",
          backgroundColor: "rgba(245, 114, 32, 1)",
          pointBackgroundColor: "rgba(245, 114, 32, 1)",
          pointRadius: 0,
          fill: true,
          tension: 0.4
        },
      ],
    };

    const options = {
      plugins: {
        legend: false,
        responsive: true,
        tooltips: {
          intersect: !1,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
      },
      maintainAspectRatio: false,

      scales: {
        y:
        {
          display: false,
          ticks: {
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 20,
            padding: 0,
            display: false,
          },
          gridLines: {
            drawBorder: false,
            display: false,
          },
        },

        x:
        {
          display: false,
          ticks: {
            padding: 0,
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },

      },
    };

    return (
      <div style={{ height: 300 }}>
        <Line data={data} options={options} height={300} />
      </div>
    );
  }
}

export default WeeklySales2;
