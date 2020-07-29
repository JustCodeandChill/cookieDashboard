import React from "react";
import { Chart } from "chart.js";

class DoughnutChart extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.renderChart();
  }

  renderChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "doughnut",

      data: {
        labels: ["Chocolate", "Vanilla Cream", "Cherry", "Coconut", "Raisin"],
        datasets: [
          {
            backgroundColor: [
              "#7c3c21",
              "#888888",
              "#ea9a96",
              "#ec823a",
              "#79d70f",
            ],
            data: [30, 30, 20, 10, 5],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "% of cookie Flavor",
        },
      },
    });

    // this.chartRef.current.style.backgroundColor = '#c7ceea'
  };

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <h3 className="no-margin">Cookie flavor preferences </h3>
        <canvas
          className="gray-background round-radius"
          height={this.props.height}
          style={{ paddingBottom: "15px" }}
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  }
}

export default DoughnutChart;
