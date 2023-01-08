import React, { useState } from "react";

const Nav = () => {

  const disStyle = {display: 'block'}
  const hidStyle = {display : 'none'}
  const [isActive, setActive] = useState("false");
  const [isDisplay, setDisplay] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    setDisplay(!isDisplay);
  };

  return (

    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.50s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="assets/images/logo-v3.png" alt="" />
              </a>
              <ul className="nav" style={isDisplay ? hidStyle : disStyle}>
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Skills</a>
                </li>
                {/* <li className="scroll-to-section">
                  <a href="#portfolio">Projects</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#blog">Blog</a>
                </li> */}
                {/* <li className="scroll-to-section">
                  <a href="#contact">Contact</a>
                </li> */}
                <li className="scroll-to-section">
                  {/* <div className="border-first-button">
                    <a href="#contact">Download Resume</a>
                  </div> */}
                </li>
              </ul>
              <a class={isActive ? "menu-trigger" : "menu-trigger active"} onClick={handleToggle}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
