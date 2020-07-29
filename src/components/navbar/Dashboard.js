import React from "react";
import "../../styles/Dashboard.css";
import Section from '../section/Section';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container background">
        <h1 style={{color:'#f7f7f7', fontSize:'50px'}}>Dashboard</h1>
        <Section />
      </div>
    );
  }
}

export default Dashboard;
