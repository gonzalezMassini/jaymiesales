import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='homeWrapper'>
      {/* <p id='email'>jaymiemaelisrodriguez@gmail.com | 787-373-2499</p> */}

      <div className='container homeContainer' id='home'>
        {/* <h1 className='homeTitle'>WELCOMEEE!!!</h1> */}
        {/* <div className='homeContent'> */}

          <h1 className='homeTitle'>Windmar Home By Jaymie</h1>
          <p>
            Ofrecemos orientaciones gratis sobre los diferentes programas solares que hay en Puerto Rico.
          </p>

          <p>Nos encargamos de que usted tenga el conocimiento necesario sobre los sistemas de energía solar para que pueda tomar la mejor decisión para el futuro.</p>
          
          <div className='contactHomeLinkContainer'>
            <Link
              className='contactHomeLink'
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              ¡Presiona para contactarnos! <span className='arrow'>&#8595;</span>
            </Link>
          </div>
          {/* <Link to='/' className='btn'>
            Back Home
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
