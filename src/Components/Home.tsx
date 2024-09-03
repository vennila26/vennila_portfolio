import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <section id="home" style={{ padding: '20px 0', textAlign: 'center' }}>
      <Row justify="center" align="middle" gutter={24}>
        <Col xl={14} lg={14} md={12} sm={24} xs={24}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Title level={1} style={{color:'#fff' }}>Hi, I'm Vennila</Title>
            <Paragraph style={{ fontSize: '1.5rem', marginBottom: '20px',color:'#fff' }}>I am a Full-Stack Developer with 1 year and 5 months of hands-on experience in PHP and Spring Boot. Throughout my career, I have successfully delivered 5 projects and 2 products that have been successfully launched. My expertise spans both frontend and backend technologies.</Paragraph>
          </div>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="assets/Files/web1.jpg"
              alt="Profile"
              style={{ maxWidth: '100%', borderRadius: '50%' }}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
