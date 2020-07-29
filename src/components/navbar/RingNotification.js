import React from "react";
import CornerIcon from "./CornerIcon";
import { Dropdown, Icon } from "semantic-ui-react";

const icons = [
  {
    mainIcon: "bell outline",
    cornerIcon: "circle",
    cornerIconColor : 'red'
  },
];

const dropdownItems = [
  {
    icon: <Icon color="red" name="users" />,
    content: "3 new members left group",
  },
  {
    icon: <Icon color="green" name="users" />,
    content: "your profile updated",
  },
];

const RingNotification = () => (
  <div className="inline-block navbar-item notification">
    <Dropdown icon={<CornerIcon {...icons[0]} />}>
      <Dropdown.Menu>
        <Dropdown.Header content={`You have ${dropdownItems.length} notifications`} />
        <Dropdown.Divider />
        {dropdownItems.map((item) => (
          <Dropdown.Item {...item} key={item.content} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default RingNotification;
