import "./nav-bar.css";
import React from "react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const items = [{
    id: "resume",
    name: "Resume",
    route: "./resume.pdf",
    icon: "./resume.png"
  }, {
    id: "github",
    name: "Github",
    route: "https://github.com/sk364",
    icon: "./github.png"
  }, {
    id: "li",
    name: "Linked In",
    route: "https://www.linkedin.com/in/supah-hakah",
    icon: "./linkedIn.png"
  }];

  return (
    <div className="nav-bar">
      <div className="brand">
        Sachin Kukreja
      </div>

      <div className="nav-items">
        {items.map(item => {
          return (
            <div className="nav-item" key={item.id}>
              <img src={item.icon} className={`icon ${item.id}`} alt="icon" />
              {item.route && (
                <a href={item.route} target="_blank">{item.name}</a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
