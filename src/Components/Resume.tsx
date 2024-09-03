import React from 'react';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const Resume: React.FC = () => {
  return (
    <section id="resume" style={{ padding: '100px 0' }}>
      <Title>Resume</Title>
      <Paragraph>
        Download my resume from the link below:
        <br />
        <Button type="primary" href="/assets/files/resume.pdf" target="_blank">
          Download Resume
        </Button>
      </Paragraph>
    </section>
  );
};

export default Resume;
