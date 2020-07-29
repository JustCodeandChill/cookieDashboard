import React from "react";
import { Dropdown, Label, Image } from "semantic-ui-react";
import "cors";

const items = [
  "My Profile",
  "Configuration Notification",
  "Extensions",
  "Log out",
];

const Profile = () => (
  <Dropdown
    className="notification navbar-item "
    icon={
      <Label as="a" image >
        <Image
          size="big"
          circular
          src="https://picsum.photos/70/70"
          style={{ border: '2px solid green' }}
        />
        <span style={{ height: "100%", fontSize: "16px", fontWeight: "400" }}>
          Paul Walker
        </span>
      </Label>
    }
  >
    <Dropdown.Menu>
      {items.map((item, id) => (
        <Dropdown.Item key={item + id}>{item}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default Profile;
