import "./nav-bar.css";
import React from "react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const items = [{
    id: "projects",
    name: "Projects",
    route: "/projects"
  }, {
    id: "logs",
    name: "Logs",
    route: "/logs"
  }, {
    id: "contact",
    name: "Contact",
    route: "/contact"
  }];

  const handleChangePage = (route) => {
    history.push(route);
  };

  return (
    <div className="nav-bar">
      <div className="brand" onClick={() => handleChangePage("/")}>
        @sk364
      </div>

      <div className="nav-items">
        {items.map(item => {
          return (
            <div className="nav-item" key={item.id} onClick={() => handleChangePage(item.route)}>
              { item.name }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
