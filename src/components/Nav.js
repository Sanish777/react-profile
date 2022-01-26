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
              <a href="index.html" className="logo">  
                <img src="assets/images/logo-v3.png" alt="" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link href="#top" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="#about">About</Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="#services">Skills</Link>
                </li>
                {/* <li className="scroll-to-section">
                  <Link href="#portfolio">Projects</Link>
                </li>
                <li className="scroll-to-section">
                  <Link href="#blog">Blog</Link>
                </li> */}
                <li className="scroll-to-section">
                  <Link href="#contact">Contact</Link>
                </li>
                <li className="scroll-to-section">
                  {/* <div className="border-first-button">
                    <Link href="#contact">Download Resume</Link>
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
