import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './SocialMedia.css'; // Assuming you have some CSS for styling

const Icons: React.FC = () => {
  return (
    <div className="social-media-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Icons;
