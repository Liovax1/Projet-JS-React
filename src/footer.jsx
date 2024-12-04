import React from 'react';

const Footer = ({userName}) => {
  return (
    <footer>
      <p>© JS-REACT B3 DEV 2024</p>
      <p className='right'>{userName}</p>
    </footer>
  );
};

export default Footer;
