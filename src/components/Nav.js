import { Link } from 'react-router-dom';

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
              <Link to="javascript:void(0);" className="logo">  
                <img src="assets/images/logo-v3.png" alt="Logo" />
              </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="/#top" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#about">About</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#services">Skills</Link>
                </li>
                {/* <li className="scroll-to-section">
                  <Link to="/#portfolio">Projects</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#blog">Blog</Link>
                </li> */}
                <li className="scroll-to-section">
                  <Link to="/#contact">Contact</Link>
                </li>
                <li className="scroll-to-section">
                  {/* <div className="border-first-button">
                    <Link to="/#contact">Download Resume</Link>
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
