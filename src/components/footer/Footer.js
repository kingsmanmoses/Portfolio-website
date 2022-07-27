import React from 'react';
import './footer.css';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container className="text-center footer">
        <p>
          Copyright {new Date().getFullYear()}, Developed by Okoye Moses. All
          Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
