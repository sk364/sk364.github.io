import "./side-bar.css";
import React from "react";

const SideBar = () => {
  const iconItems = [];

  return (
    <div className="side-bar">
      <div className="self">
        <img src="./dp.png" alt="dp" className="dp" />
        <div className="name">Sachin Kukreja</div>
      </div>
      <div className="contact">
        {iconItems.map(iconItem => {
          return (
            <div onClick={() => window.location.href = iconItem.route}>
              <img src={`./public/${iconItem.icon}`} alt="icon" className="icon" />
              <span className="icon-name">{ iconItem.name }</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
