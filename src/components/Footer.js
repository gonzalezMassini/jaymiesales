import React from 'react';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <footer>
        <div className='footerTextContainer'>
          <span className='footerText'>
            &copy; {new Date().getFullYear()} WINDMAR HOME BY JAYMIE{' '}
          </span>
          &nbsp;
          <span className='footerText'>Design by JOSE GONZALEZ-MASSINI</span>
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
