import React from 'react';
import { Typography, Row, Col,Progress } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import "./About.css";

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const skills = [
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 85 },
    { name: "Javascript", proficiency: 80 },
    { name: "PHP", proficiency: 95 },
    { name: "Spring Boot", proficiency: 75 },
    { name: "Java", proficiency: 70 },
    { name: "MongoDB", proficiency: 80 },
    { name: "Typescript", proficiency: 90 },
    { name: "Redux", proficiency: 85 },
    { name: "React", proficiency: 80 }
  ];

  return (
    <section id="about" style={{ padding: '100px 0', textAlign: 'center' }}>
      <Title level={2} style={{color:'#fff' }}>About Me</Title>

      <Row justify="center" align="middle" gutter={24}>
        <Col xl={14} lg={14} md={12} sm={24} xs={24}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Paragraph style={{ fontSize: '1.2rem', lineHeight: '1.6' ,color:'#fff'}}>
              Hello! I am a passionate Full-Stack Developer with over 1 year and 5 months of experience specializing in both frontend and backend technologies. My journey in the tech world has equipped me with a diverse skill set and a proven track record of successful project delivery.I have had the opportunity to work on a variety of projects, delivering 5 projects in total, including 2 products that were successfully launched. My technical expertise includes:
            </Paragraph>
          </div>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24}>
          <div style={{ display: 'flex', justifyContent: 'center',color:'#fff' }}>
            <MailOutlined /><span>nithyalalitha26@gmail.com</span>
          </div>
        </Col>
      </Row>
      <div className="skills-section p-5 ">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <Progress
                type="circle"
                percent={skill.proficiency}
                format={(percent) => (
                  <span style={{ color: "white" }}>{`${percent}%`}</span>
                )}
                strokeColor="#07d2de"
                trailColor="#ddd" // Ensure the trail color is visible
              />
              <p className="skill-name pl-5" style={{color:'#fff' }}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
