import React from "react";
import { Progress } from "semantic-ui-react";
import { generateRandomKPI } from "../../../utils/generateRandomNumber";

const KPIs = [
  {
    title: "Large Food Order served:",
    color: "blue",
    progress: generateRandomKPI(),
  },
  {
    title: "Net Sales – Dollar or Percentage Growth",
    color: "green",
    progress: generateRandomKPI(),
  },
  {
    title: "Hours of Resources Spent on Sales Follow Up",
    color: "red",
    progress: generateRandomKPI(),
  },
  {
    title: "Number of Engaged Qualified Leads in Sales Funnel",
    color: "yellow",
    progress: generateRandomKPI(),
  },
  {
    title: "Net Sales – Dollar or Percentage Growth",
    color: "brown",
    progress: generateRandomKPI(),
  },
];
const Achievement = () => {
  return (
    <div className="achivement-container border">
      <h4>Progress for {new Date().getMonth()}/{new Date().getFullYear()} </h4>
      {KPIs.map(({ title, color, progress }, id) => {
        return (
          <div style={{color: 'black'}} key={title+id}>
            {title}
            <Progress
              value={progress.completed.toString()}
              total={progress.total.toString()}
              progress="ratio"
              color={color}
              style={{margin:'0 0 5px 0'}}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Achievement;
