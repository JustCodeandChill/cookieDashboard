import React from "react";
import { Statistic, Icon } from "semantic-ui-react";
import "../../../styles/Statistic.css";
class ChangableStatistic extends React.Component {
  //Change the default number here
  state = {
    count: 1000,
  };

  componentDidMount = () => {
    this.updateCount();
  };

  //Increase number randomly every 2 seconds
  updateCount = () => {
    let newCount;
    setInterval(() => {
      newCount = Math.floor(
        this.state.count + (Math.random() * 10 + this.props.degreeOfChange)
      );
      this.setState({ count: newCount });
    }, 2000);
  };

  renderContent = () => {
    return (
      <div style={{marginBottom:'30px'}}>
        <h3 className="heading" style={{marginBottom:'0px'}}>{this.props.text}</h3>
        <div className="statistic-container ">
          <Icon className="icon-margin" name={this.props.name} size="big" style={{color: `${this.props.color}`}}/>
          <Statistic className="round-radius" style={{paddingLeft:'50px'}}>
            <Statistic.Value>{this.state.count}</Statistic.Value>
            <Statistic.Label>{this.props.label}</Statistic.Label>
          </Statistic>
        </div>
      </div>
    );
  };
  render() {
    return this.renderContent();
  }
}

export default ChangableStatistic;
