import React from "react";

const NavBar = () => {
  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left navitems">PortFolio</div>
      <div className="right">
        <a href="#home" className="navitems">
          Home
        </a>
        <a href="#experience" className="navitems">
          Experience
        </a>
        <a href="#skills" className="navitems">
          Skills
        </a>
        <a href="#projects" className="navitems">
          Projects
        </a>
        <a href="#contacts" className="navitems">
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
