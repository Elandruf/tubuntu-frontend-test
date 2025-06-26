import React, { useEffect, useState } from "react";
import '../styles/Footer.css'

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.body.offsetHeight - 100; 

      if (scrollPosition >= threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); 

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={`footer ${visible ? "footer--visible" : ""}`}> 
    </footer>
  );
}

export default Footer;

