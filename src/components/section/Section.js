import React from "react";
import { Grid } from "semantic-ui-react";
import "../../styles/Dashboard.css";
//charts import
import ChartSection from './charts/ChartSection';
//chats import
import ChatSection from "./chats/ChatSection";

const Section = () => (
  <Grid divided='vertically' className="section round-radius" stackable columns="equal">
    {/* First Row contain all the charts */}
    <ChartSection />

{/* Second Row */}
    <ChatSection />
  </Grid>
);

export default Section;
