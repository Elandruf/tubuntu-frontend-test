import React, { useEffect, useState } from "react";
import '../styles/Navbar.css'

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {      
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
      Users list
    </nav>
  );
}

export default Navbar;
