import React from "react";
import { Chart } from "chart.js";
import generateCurrentTime from "../../../utils/generateCurrentTime";
import generateRandomNumber from "../../../utils/generateRandomNumber";

const TIME_REPEAT = 5;
class TimeSerie extends React.Component {
  chartRef = React.createRef();
  state = {
    data: [],
    labels: [],
  };
  componentDidMount() {
    this.updateTimeSerieEveryXSeconds(TIME_REPEAT);
  }
  // keep the time serie clear and has only lmited amount of points 
  limitSizeOfStateData = (size) => {
    if (this.state.data.lengh > size) {
      let reducedSize = this.state.data.lengh - size;
      let data = this.state.data.slice(reducedSize);
      this.setState({data : data});
    }

    if (this.state.labels.length > size) {
      let reducedSize = this.state.labels.length - size;
      let labels = this.state.labels.slice(reducedSize);
      this.setState({labels : labels});
    }
  }
  updateTimeSerieEveryXSeconds = (second) => {
    setInterval(() => {
      this.limitSizeOfStateData(7);
      //update y axis with abitrary number of customer
      this.setState({ data: [...this.state.data, generateRandomNumber()] });

      //update x axis with current time hour:minute:second
      this.setState({ labels: [...this.state.labels, generateCurrentTime()] });

      //create chart and update it every X seconds
      const myChartRef = this.chartRef.current.getContext("2d");

      new Chart(myChartRef, {
        type: "line",
        data: {
          labels: this.state.labels,
          datasets: [
            {
              borderColor: "green",
              showLine: true,
              fill: false,
              label: "Customer in store",
              data: this.state.data,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 100,
                  maxTicksLimit: 5,
                  beginAtZero: true,
                  stepSize: 0.5,
                },
              },
            ],
            xAxes: [],
          },
        },
      });
    }, second * 1000);

    this.chartRef.current.style.height = '30vh'
  };

  render() {
    return (
      <div style={{marginBottom:'30px'}}>
        <h3 className="no-margin">Number of customer in store every {TIME_REPEAT} seconds</h3>
        <div className="gray-background round-radius">
            <canvas height={this.props.height} style={{padding:'0 0 5px 0'}} id="myChart" ref={this.chartRef} />
        </div>
        
      </div>
    );
  }
}

export default TimeSerie;
