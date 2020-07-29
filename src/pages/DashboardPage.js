import React from "react";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../components/navbar/Dashboard";

export default class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}
