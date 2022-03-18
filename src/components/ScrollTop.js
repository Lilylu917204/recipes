import React, { useState } from "react";
import { MaterialIcon } from "common/materialUI";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
      
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
      
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  

  return (
    <div
      title="Back to Top"
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <MaterialIcon.KeyboardArrowUpOutlinedIcon className="scrollTop__icon" />
    </div>
  );
};

export default ScrollTopArrow;
