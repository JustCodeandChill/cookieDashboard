import React from "react";
import { Chart } from "chart.js";

class PolarChart extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.renderChart();
  }

  renderChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
        type: 'polarArea',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [400,100,734,784,433]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: this.props.chartTitle
          }
        }
    });
  };

  render() {
    return (
      <div style={{ marginBottom: "30px"}}>
        <h3 className="no-margin">{this.props.text}</h3>
        <canvas className="gray-background round-radius" height={this.props.height} style={{paddingBottom:'15px'}} id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default PolarChart;
