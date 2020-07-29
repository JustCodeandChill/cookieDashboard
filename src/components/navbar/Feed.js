import React from "react";
import { Header, Image } from "semantic-ui-react";

import "cors";
const Feed = ({ name, subject, time }) => (
  <Header as="h4">
    <Image src="https://picsum.photos/40/40" avatar />
    <Header.Content className="feed">
      <Header.Subheader>
        {subject} <span className="time">{time}</span>
      </Header.Subheader>
      {name}
    </Header.Content>
  </Header>
);

export default Feed;
