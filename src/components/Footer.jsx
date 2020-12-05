import React from 'react';
import '../css/Footer.css';

const Footer = (props) => (
  <footer className="Footer">
    <p> "Práctica, práctica como demente. Práctica hasta ser excelente" </p>
    <small>
      Created by
      <a
        target="_blank"
        href="https://angelvasquez.now.sh"
        rel="noopener noreferrer"
      >
        {' '}
        Ángel Vásquez{' '}
      </a>
    </small>
  </footer>
);

export default Footer;
