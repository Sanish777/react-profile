import { NavHashLink } from 'react-router-hash-link';

const Nav = () => {
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
                <img src="assets/images/logo-v3.png" alt="Logo" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section">
                 <NavHashLink to="/path#top" className="active">
                    Home
                  </NavHashLink>
                </li>
                <li className="scroll-to-section">
                 <NavHashLink to="/path#about">About</NavHashLink>
                </li>
                <li className="scroll-to-section">
                 <NavHashLink to="/path#services">Skills</NavHashLink>
                </li>
                {/* <li className="scroll-to-section">
                 <NavHashLink to="/path#portfolio">Projects</NavHashLink>
                </li>
                <li className="scroll-to-section">
                 <NavHashLink to="/path#blog">Blog</NavHashLink>
                </li> */}
                <li className="scroll-to-section">
                 <NavHashLink to="/path#contact">Contact</NavHashLink>
                </li>
                <li className="scroll-to-section">
                  {/* <div className="border-first-button">
                   <NavHashLink to="/path#contact">Download Resume</NavHashLink>
                  </div> */}
                </li>
              </ul>
              <a className="menu-trigger">
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
