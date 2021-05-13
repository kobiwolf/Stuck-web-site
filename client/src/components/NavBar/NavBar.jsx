import './NavBar.css';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const refHamburger = useRef();
  const reNavMenu = useRef();
  const refBackground = useRef();
  function mobileMenu() {
    refHamburger.current.classList.toggle('active');
    reNavMenu.current.classList.toggle('active');
    refBackground.current.classList.toggle('active');
  }
  function closeMenu() {
    refHamburger.current.classList.remove('active');
    reNavMenu.current.classList.remove('active');
    refBackground.current.classList.remove('active');
  }
  return (
    <>
      <div className="background" ref={refBackground} onClick={closeMenu}></div>
      <header className="header">
        <nav className="navbar">
          <ul className="nav-menu" ref={reNavMenu}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                בית
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/items" className="nav-link" onClick={closeMenu}>
                מוצרים
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs" className="nav-link" onClick={closeMenu}>
                עלינו{' '}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link" onClick={closeMenu}>
                הגדרות
              </Link>
            </li>
          </ul>
          <div className="hamburger" ref={refHamburger} onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
}
