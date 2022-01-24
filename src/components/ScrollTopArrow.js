import React, { useState } from "react";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      title="Scroll To Top"
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <i class="fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollTopArrow;
