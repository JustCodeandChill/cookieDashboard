import React from "react";
import { List, Icon } from "semantic-ui-react";
import TodoListItem from "./TodoListItem";

const ITEMS = [
  {
    text: "Designing a new cookie recipe",
    time: "5 days",
  },
  {
    text: "Training new members",
    time: "2 hours",
  },
  {
    text: "Meeting Mr.Jonas for advice",
    time: "1 week",
  },
  {
    text: "Signing new 2021 business plan ",
    time: "1 week",
  },
];
class TodoList extends React.Component {
  render() {
    return (
      <div className="chat-container todo border">
        <div className="reminder-header">
          <h4 className="no-margin" style={{ display: "inline-block" }}>
            Reminder
          </h4>
          <Icon name="sort" className="reminder-icon" />
          <Icon name="edit outline" className="reminder-icon" />
        </div>

        <List>
          {ITEMS.map((item, id) => {
            return <TodoListItem item={item} key={id}/>;
          })}
        </List>
      </div>
    );
  }
}

export default TodoList;
