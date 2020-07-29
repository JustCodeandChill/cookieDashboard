import React from "react";
import { Image } from "semantic-ui-react";
//import avatar
import dad from "../../../avatar/dad.png";
import woman from "../../../avatar/woman.png";
import person from "../../../avatar/person.png";
import muslim from "../../../avatar/muslim.png";
import barista from "../../../avatar/barista.png";

const MEMBERS = [
  {
    avatar: dad,
    name: "Lucas Sett",
  },
  {
    avatar: woman,
    name: "Johnson Alice",
  },
  {
    avatar: muslim,
    name: "Kusza Millim",
  },
  {
    avatar: barista,
    name: "Quick Mayham",
  },
  {
    avatar: person,
    name: "James James",
  },
];
const Member = () => {
  return (
    <div className="chat-container member border">
      <div className="member-header">
        <h4>{MEMBERS.length} Member(s)</h4>
      </div>
      <div className="member-list">
        {MEMBERS.map(({ avatar, name }, id) => {
          return (
            <div className="member-item" key={name + id}>
              <Image src={avatar} size="mini" circular className="center" />
              <div>{name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Member;
