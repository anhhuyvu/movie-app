import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Footer.scss';

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="social-media-icon">
        <BsFacebook />
        <BsInstagram />
        <BsLinkedin />
      </div>
      <div>©2021, Movie, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
