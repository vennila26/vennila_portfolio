import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-scroll';
import { HomeOutlined, UserOutlined, ProjectOutlined, FileTextOutlined, MailOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderLayout: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home"); 

  const handleSetActive = (key:any) => {
    setActiveLink(key); 
  };

  return (
    <Header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Logo</div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="home">
            <Link to="home" smooth={true} duration={500}  onClick={() => handleSetActive("home")} className={activeLink === "home" ? "active-link" : ""}> 
             <HomeOutlined/> Home
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="about" smooth={true} duration={500} onClick={() => handleSetActive("about")} className={activeLink === "about" ? "active-link" : ""}>
            <UserOutlined /> About
            </Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link to="service" smooth={true} duration={500}  onClick={() => handleSetActive("service")} className={activeLink === "service" ? "active-link" : ""}>
            <ProjectOutlined /> Service
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="resume">
            <Link to="resume" smooth={true} duration={500}  onClick={() => handleSetActive("resume")} className={activeLink === "resume" ? "active-link" : ""}>
            <FileTextOutlined /> Resume
            </Link>
          </Menu.Item> */}
          <Menu.Item key="contact">
            <Link to="contact" smooth={true} duration={500}  onClick={() => handleSetActive("contact")} className={activeLink === "contact" ? "active-link" : ""}>
            <MailOutlined /> Contact
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderLayout;
