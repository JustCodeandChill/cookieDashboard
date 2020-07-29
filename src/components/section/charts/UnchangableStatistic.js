import React from "react";
import { Statistic, Icon } from "semantic-ui-react";
import "../../../styles/Statistic.css";
class UnChangableStatistic extends React.Component {
  renderContent = () => {
    return (
      <div style={{marginBottom:'30px'}}>
        <h3 className="no-margin heading">{this.props.text}</h3>
        <div className="statistic-container">
          <Icon className="icon-margin" name={this.props.name} size="big" color={this.props.color} />
          <Statistic style={{paddingLeft:'50px'}}>
            <Statistic.Value>{this.props.number}</Statistic.Value>
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

export default UnChangableStatistic;
