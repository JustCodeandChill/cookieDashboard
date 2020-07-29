import React from "react";
import CornerIcon from "./CornerIcon";
import Feed from "./Feed";
import { Dropdown} from "semantic-ui-react";

const feeds = [
  {
    name: "Alan Schneider",
    subject: "Annual Financial Report",
    time: "5 sec",
  },
  {
    name: "Megan Seiru",
    subject: "Meeting at 5pm",
    time: "3 days",
  },
  {
    name: "Hijin Katarina",
    subject: "New Office place confirmation",
    time: "1 week",
  }
];

const icons = [
  {
    mainIcon : "outline mail",
    cornerIcon: "circle",
    cornerIconColor : 'red'
  }
]
const Notification = () => (
  <div className="inline-block navbar-item notification">
    <Dropdown icon={<CornerIcon {...icons[0]}  scrolling={true}/>}>
      <Dropdown.Menu>
        <Dropdown.Header content={`${feeds.length} New messages from `} />
        <Dropdown.Divider />
        {feeds.map((feed) => (
          <Feed {...feed} key={feed.name} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default Notification;
