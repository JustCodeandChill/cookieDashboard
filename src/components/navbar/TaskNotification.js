import React from "react";
import CornerIcon from "./CornerIcon";
import { Dropdown, Icon } from "semantic-ui-react";

const icons = [
  {
    mainIcon: "tasks",
    cornerIcon: "circle",
    cornerIconColor: "red",
  },
];

const tasks = [
  {
    icon: <Icon color="red" name="users" />,
    content: "Train new members",
  },
  {
    icon: <Icon color="red" name="chart bar outline" />,
    content: "Meeting at 5pm",
  },
];

const finishedTasks = [
  {
    icon: <Icon color="green" name="users" />,
    content: "Hired new members",
  },
  {
    icon: <Icon color="green" name="star outline" />,
    content: "Passed CMR Test",
  },
];

const TaskNotification = () => (
  <div className="inline-block navbar-item notification">
    <Dropdown icon={<CornerIcon {...icons[0]} />}>
      <Dropdown.Menu>
        <Dropdown.Header content={`You have ${tasks.length} tasks`} />
        <Dropdown.Divider />
        {tasks.map((task) => (
          <Dropdown.Item {...task} key={task.content} />
        ))}
        <Dropdown.Header content={`Recently fininshed tasks`} />
        {finishedTasks.map((task) => (
          <Dropdown.Item {...task} key={task.content} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default TaskNotification;
