import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTitleSection from '../components/PageTitleSection';
import { ROUTES } from '../Routes';
import { Images } from "../data/images";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 4rem 2rem;
  background: #fff;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #eee;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #e95d22;
    box-shadow: 0 12px 48px rgba(233, 93, 34, 0.15);
  }

  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 10px;
    border: 4px solid #f5f5f5;
    transition: all 0.3s ease;
  }

  &:hover img {
    border-color: #e95d22;
    transform: scale(1.05);
  }

  h3 {
    color: #333;
    margin: 1rem 0;
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-top: 1rem;
  }
`;

// Map service paths to their respective images
const serviceImages = {
  '/services/substations-transmission-distribution-line': Images.SubstationHQImage,
  '/services/designing': Images.DesignBuildingImage,
  '/services/survey-inspection': Images.SurveyInspectionImage,
};

// Map service paths to their descriptions
const serviceDescriptions: { [key: string]: string } = {
  'substations-transmission-distribution-line': 'Expert solutions for power infrastructure including substations, transmission lines, and distribution networks.',
  'designing': 'Comprehensive design services for electrical systems and power infrastructure projects.',
  'survey-inspection': 'Professional survey and inspection services ensuring quality and compliance in power projects.',
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Find the services route and get its children
  const servicesRoute = ROUTES.find(route => route.path === '/services');
  const services = servicesRoute?.children || [];

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <PageTitleSection title="Our Services" />
      <Content>
        <ServicesGrid>
          {services.map((service) => {
            return (
              <ServiceCard 
                key={service.path}
                onClick={() => handleServiceClick(service.path)}
              >
                <img 
                  src={serviceImages[service.path as keyof typeof serviceImages]} 
                  alt={service.title}
                />
                <h3>{service.title}</h3>
                <p>{serviceDescriptions[service.path.split('/').pop() as keyof typeof serviceDescriptions]}</p>
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </Content>
    </Container>
  );
};

export default ServicesPage;
