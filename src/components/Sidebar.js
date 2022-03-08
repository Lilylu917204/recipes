import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../common/data";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  const openMenu = (
    <div className=" icon menu-btn">
      <MenuIcon fontSize="large" onClick={showSidebar} />
    </div>
  );

  const closeMenu = (
    <div className=" icon cancel-btn">
      <CloseIcon fontSize="large" />
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <Link to="#">
          <MenuIcon
            className="menu-icon menu-bars"
            fontSize="large"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "sidebar__nav active" : "sidebar__nav"}>
        <ul className="sidebar__list" onClick={showSidebar}>
          <li className="sidebar__toggle">
            <Link to="#" className="menu-bars">
              <CloseIcon className="menu-icon  remove-icon" fontSize="large" />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li className={item.className} key={index}>
                <Link
                  to={item.path}
                  onClick={showSidebar}
                  className="sidebar__link"
                >
                  <span>{item.icon}</span>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
