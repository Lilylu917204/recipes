import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../common/data";
import { MaterialIcon } from "../../common/materialUI";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const openMenu = (
    <MaterialIcon.IconButton className=" icon menu-btn">
      <MaterialIcon.MenuIcon
        className="menu-icon"
        fontSize="large"
        onClick={showSidebar}
      />
    </MaterialIcon.IconButton>
  );

  const closeMenu = (
    <MaterialIcon.IconButton className="menu-icon icon cancel-btn">
      <MaterialIcon.CloseIcon
        className="remove-icon"
        fontSize="large"
        onClick={showSidebar}
      />
    </MaterialIcon.IconButton>
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
