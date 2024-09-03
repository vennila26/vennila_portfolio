import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Icon.css';

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer style={{ backgroundColor: 'black', color: '#fff', padding: '20px' }}>
      <Row justify="space-between" align="middle">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Text strong style={{ color: '#fff' }}>
            © {currentYear}. All rights reserved.
          </Text>
        </Col>
        
        <Col xl={12} lg={12} md={12} sm={24} xs={24} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div className="social-media-icons" style={{ display: 'flex', gap: '15px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaLinkedin size={30} />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
