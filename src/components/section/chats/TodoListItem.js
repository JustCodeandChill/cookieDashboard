import React from "react";
import { List } from "semantic-ui-react";

class TodoListItem extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    let clicked = this.state.clicked;
    let {text, time} = this.props.item;
    return (
      <List.Item onClick={this.handleClick} className="reminder-item">
        <List.Icon
          name={clicked ? "check" : "cancel"}
          color={clicked ? "green" : "red"}
          size="small"
        />
        <List.Content className={clicked ? "check" : "cancel"}>
          {text}
          <span className="time-reminder">{time}</span>
        </List.Content>
      </List.Item>
    );
  }
}

export default TodoListItem;
