import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../common/data";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const openMenu = (
    <IconButton className=" icon menu-btn">
      <MenuIcon className="menu-icon" fontSize="large" onClick={showSidebar} />
    </IconButton>
  );

  const closeMenu = (
    <IconButton className="menu-icon icon cancel-btn">
      <CloseIcon
        className="remove-icon"
        fontSize="large"
        onClick={showSidebar}
      />
    </IconButton>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <Link to="#">{sidebar ? closeMenu : openMenu}</Link>
      </div>
      <nav className={sidebar ? "sidebar__nav active" : "sidebar__nav"}>
        <ul className="sidebar__list">
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
