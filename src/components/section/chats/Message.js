import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

let users = [
  {
    src: "https://react.semantic-ui.com/images/avatar/small/rachel.png",
    name: "Anna Schznerei",
    icon: {
      name: "circle",
      status: "Offline",
      color:'red'
    },
    message:
      "We are having an unexpected large food order. We need you to confirm.",
  },
  {
    src: "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
    name: "Jane Doe",
    icon: {
      name: "circle",
      status: "Online",
      color:'green'
    },
    message:
      "Your business plan for the next month was approved by the counsel. Please come to my office and fill out essential documents ",
    file: "Form HSG412.docx",
  },
  {
    src: "https://react.semantic-ui.com/images/avatar/small/matthew.png",
    name: "Alex Harmony",
    icon: {
      name: "circle",
      status: "Online",
      color:'green'
    },
    message:
      "Hey man, there are new ingredient imported yesterday. Would you teach me how to check it at 11a.m?",
  },
];
export default () => {
  return (
    <Grid divided="vertically" stackable >
      <Grid.Row columns={1} >
        <Grid.Column>
          <div className="message border" >
            <div className="message-title">Chat message</div>
            <ul className="message-list">
              {users.map((user) => {
                return (
                  <li className="message-item" key={user.name}>
                    <Image className="custom-avatar" src={user.src} />
                    <div className="message-chat">
                      <div className="message-chat-username" style={{color:user.icon.color}}>
                        {user.name}{" "}
                        <Icon name={user.icon.name}>{user.icon.status}</Icon>
                      </div>
                      <span>{user.message}</span>
                      {user.file ? (
                        <div>
                          <Icon name="file outline" />
                          {user.file}
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
              <div className="message-answer">
                <input placeholder="Type message..." className="message-answer-input"/>
                <Icon name="pencil alternate" color="grey"/>
              </div>
            </ul>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
