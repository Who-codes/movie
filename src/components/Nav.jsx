import React, { useEffect, useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [showNavTransition, setShowNavTransition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", transition);

    return () => window.removeEventListener("scroll", transition);
  }, []);

  const transition = () => {
    if (window.scrollY > 100) {
      setShowNavTransition(true);
    } else {
      setShowNavTransition(false);
    }
  };

  return (
    <div className={`nav ${showNavTransition && "nav-black"}`}>
      <div className="nav-content">
        <h1 className="logo">The Moviezs</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="account"
          className="nav-avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
