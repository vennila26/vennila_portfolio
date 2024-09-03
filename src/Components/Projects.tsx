import React from "react";
import Slider from "react-slick";
import { Card, Typography } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Service.css';

// Define the TypeScript type for the service items
interface ServiceItem {
  id: number;
  companyName: string;
  field: string;
  duration: string;
  description: string;
}

// Define the array of services with the ServiceItem type
const services: ServiceItem[] = [
  {
    id: 1,
    companyName: 'A Cavinkare Group Company - HEPL',
    field: 'Full-Stack Developer',
    duration: '1 year and 5 months',
    description: 'I am a passionate Full-Stack Developer with over 1 year and 5 months of experience specializing in both frontend and backend technologies. My journey in the tech world has equipped me with a diverse skill set and a proven track record of successful project delivery. I have had the opportunity to work on a variety of projects, delivering 5 projects in total, including 2 products that were successfully launched.',
  },
  {
    id: 2,
    companyName: 'A Cavinkare Group Company - HEPL',
    field: 'PHP Full Stack Developer Intern',
    duration: '4 months',
    description: 'Designed and implemented responsive web interfaces using HTML, CSS, and Bootstrap, while also developing and maintaining server-side applications with PHP. Additionally, designed and managed relational databases using MySQL, focusing on schema design, query optimization, and data integrity.',
  },
];

const { Title, Paragraph } = Typography;

const Service: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="service" className="service-section section_row p-5">
      <div className="center-container">
        <div className="text-container">
          <span className="background-text">My Services</span>
        </div>
      </div>
      <div className="service-slider mt-5">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <Card className="service-card-content">
                <Title level={4} style={{ color: '#fff' }}>{service.companyName}</Title>
                <Title level={5} style={{ color: '#fff' }}>{service.field}</Title>
                <p><strong>Duration:</strong> {service.duration}</p>
                <Paragraph className="service-card-description">
                  {service.description}
                </Paragraph>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Service;
