import React from "react";

export default ({ green, text, data }) => {
  return (
    <div className={green ? "green-list" : "red-list"}>
      <h3 className="heading no-margin">{text}</h3>
      <ul className="gray-background round-radius" style={{ margin: '0 0 10px 0', padding: 0 }}>
        <li id={green ? 'green-first-li': 'red-first-li'} style={{fontSize:'40px', padding:'10px 0', lineHeight:'40px'}}>{data[0]}</li>
        {data.map((cookie, id) => {
          if (id === 0) return null;
          return <li key={id}>{cookie}</li>;
        })}
      </ul>
    </div>
  );
};
