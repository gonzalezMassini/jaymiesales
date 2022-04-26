import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
// import styles from './Navbar.module.css'
const Navbar = () => {
  const [isNavToggle, setIsNavToggle] = useState(false);
  const handleNavToggle = () => {
    setIsNavToggle((prev) => {
      return !prev;
    });
  };
  return (
    <div className='navbar'>
    {/* // <div className={styles.navbar}> */}
      <div className='menu'>
      {/* <div className={styles.menu}> */}
        {/* <a
          href='https://gracious-jang-f74f68.netlify.app'
          className='link-title'
        >
          Windmar Home By Jaymie
        </a> */}
        {/* <p id='email'>jaymiemaelisrodriguez@gmail.com | 787-373-2499</p> */}
        { isNavToggle ?null: <p id='email'> <a className="link"
          href='mailto:jaymiemaelis@windmarhome.com'
        >jaymiemaelis@windmarhome.com </a><a className="link" href="tel:+1787-373-2499">| 787-373-2499</a> </p>}

        <div
          className='bar'
          // className={styles.bar}
          onClick={handleNavToggle}
          style={{ transform: isNavToggle ? 'rotate(-90deg)' : null }}
        >
          <FaBars />
        </div>
        <ul>
          <Link
            className='li'
            to='home'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
          >
            Home
          </Link>
          <Link
            className='li'
            to='projects'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Images
          </Link>
          <Link
            className='li'
            to='contact'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </ul>
        <CSSTransition
          in={isNavToggle}
          unmountOnExit
          timeout={500}
          classNames='display'
        >
          {/* {isNavToggle && ( */}
          <ol
            style={
              {
                // display: isNavToggle ? null : 'none',
              }
            }
          >
            <Link
              onClick={handleNavToggle}
              className='li'
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Home
            </Link>
            <Link
              onClick={handleNavToggle}
              className='li'
              to='projects'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Images
            </Link>
            <Link
              onClick={handleNavToggle}
              className='li'
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </ol>
          {/* )} */}
        </CSSTransition>
        {/* { isNavToggle ?null: <p id='email'>jaymiemaelisrodriguez@gmail.com | 787-373-2499</p>} */}
        <hr className='navHR' />
      </div>
    </div>
  );
};

export default Navbar;
