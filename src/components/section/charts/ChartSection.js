import React from "react";
import { Grid } from "semantic-ui-react";
//charts import
import ChangableStatistic from "./ChangableStatistic";
import UnchangeableStatiscitc from "./UnchangableStatistic";
import TimeSerie from "./TimeSerie";
import DoughnutChart from "./Doughnut";
import BarChart from "./BarChart";
import PolarChart from "./PolarChart";
import List from "./List";

const ChartSection = () => {
  return (
    <Grid.Row>
      <Grid.Column width={4}>
        <ChangableStatistic
          name="dollar sign"
          color="#77df79"
          degreeOfChange={100}
          text="Cookie Sold"
          label="today"
        />
        <ChangableStatistic
          name="trash"
          color="red"
          degreeOfChange={1.05}
          text="Cookie Wasted"
          label="today"
        />
        <UnchangeableStatiscitc
          name="pointing right"
          color="green"
          text="Daily Estimated Profit"
          label="$"
          number="5600"
        />
        <UnchangeableStatiscitc
          name="pointing right"
          color="red"
          text="Daily Estimated Cost"
          label="$"
          number="1470"
        />
        <List
          green
          text="Best seller"
          data={[
            "Mommy Chocolate Chip",
            "2nd Cherry Blossom Sweeet Pie",
            "3rd 3-stacks-vanilla Pie",
          ]}
        />
        <List
          green={false}
          text="Worst seller"
          data={[
            "Raisin Extra Sour",
            "2nd Dark Chocolate Pie",
            "3rd Rainbow Twisted",
          ]}
        />
      </Grid.Column>
      <Grid.Column width={7}>
        <DoughnutChart />
        <PolarChart
          text="Customer by nationality"
          chartTitle={`Quantity of customer nationality`}
        />
        <BarChart
          text="Yearly Profit"
          chartTitle="The last 5 year profit (thousand dollars)"
          height="170px"
        />
      </Grid.Column>

      <Grid.Column width={5}>
        <TimeSerie height="190px"/>

        <BarChart
          horizontal
          text="Customer satisfaction"
          chartTitle={`In the first 6 months of ${new Date().getUTCFullYear()}`}
          height="200px"
        />

        
      </Grid.Column>
    </Grid.Row>
  );
};

export default ChartSection;
