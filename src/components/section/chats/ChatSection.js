import React from "react";
import { Grid } from "semantic-ui-react";
//styles
import "../../../styles/ChatSection.css";
// components
import Message from "./Message";
import Achievement from "./Achievement";
import TodoList from "./TodoList";
import Member from "./Members";

const ChatSection = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <TodoList />
        <Member />
      </Grid.Column>
      <Grid.Column width={7}>
        <Message />
      </Grid.Column>
      <Grid.Column>
        <Achievement />
      </Grid.Column>
    </Grid.Row>
  );
};

export default ChatSection;
