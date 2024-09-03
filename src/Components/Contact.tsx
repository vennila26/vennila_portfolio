import React from 'react';
import { Form, Input, Button, Typography, Card, notification, Row, Col } from 'antd';
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Handle form submission here
    console.log('Received values:', values);
    
    // For demonstration, we show a success notification
    notification.success({
      message: 'Message Sent',
      description: 'Your message has been sent successfully!',
    });
    
    // Clear the form fields
    form.resetFields();
  };

  return (
    <section className="contact contact-section section_row">
      <div className="center-container">
        <div className="text-container">
          <span className="background-text">Contact Us</span>
        </div>
      </div>
      <Row justify="center" align="middle" gutter={24}>
        <Col xl={10} lg={10} md={12} sm={24} xs={24}>
          <Title level={2} style={{ color: '#fff' }}>Get In Touch</Title>
          <Paragraph style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#fff' }}>
            Feel free to reach out to us using the form below.
          </Paragraph>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Card bordered={true} style={{ borderRadius: '8px', borderColor: '#fff', borderWidth: '1px', width: '80%' }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label={<span style={{ color: '#fff' }}>Name</span>}
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              
              <Form.Item
                name="email"
                label={<span style={{ color: '#fff' }}>Email</span>}
                rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              
              <Form.Item
                name="phone"
                label={<span style={{ color: '#fff' }}>Phone Number</span>}
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input placeholder="Your Phone Number" />
              </Form.Item>
              
              <Form.Item
                name="subject"
                label={<span style={{ color: '#fff' }}>Message</span>}
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea placeholder="Message" rows={4} />
              </Form.Item>
              
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '20%', borderRadius: '4px', float: 'right' }}>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
