import React from "react";
import { Chart } from "chart.js";
import generateYearArray from "../../../utils/generateYearArray";
import {
  generateRandomNumberArray,
  generateRandomPercentageNumberArray,
} from "../../../utils/generateRandomNumber";
const SIZE = 5;
class BarChart extends React.Component {
  chartRef = React.createRef();

  componentDidMount = () => {
    this.props.horizontal ? this.renderHorizontalChart() : this.renderChart();
  };
  //Customize for customer satisfaction
  renderHorizontalChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "horizontalBar",
      data: {
        labels: ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"],
        datasets: [
          {
            label: "Percentage (%)",
            backgroundColor: [
              "#fecd51",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#ff5200",
            ],
            data: generateRandomPercentageNumberArray(5),
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: this.props.chartTitle,
        },
      },
    });

    // this.chartRef.current.style.backgroundColor = '#b5ead7'
  };
  //customize for 5-year-profit
  renderChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: generateYearArray(SIZE),
        datasets: [
          {
            label: "dollar (thousand)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: generateRandomNumberArray(SIZE, 1000),
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: this.props.chartTitle,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
        },
      },
    });
  };

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <h3 className="no-margin">{this.props.text}</h3>
        <canvas
          height={this.props.height}
          className="gray-background round-radius"
          style={{ paddingBottom: "15px" }}
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  }
}

export default BarChart;
