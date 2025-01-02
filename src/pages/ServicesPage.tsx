import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTitleSection from '../components/PageTitleSection';
import { ROUTES } from '../Routes';
import { Images } from "../data/images";

const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background: #fff;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 1.5rem;
    object-fit: contain;
  }

  h3 {
    color: #333333;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: #666666;
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

// Map service paths to their respective images
const serviceImages: { [key: string]: string } = {
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
    <PageContainer>
      <Container>
        <PageTitleSection title="Our Services" />
        <Content>
          <ServicesContainer>
            {services.map((service) => {
              const pathKey = service.path.split('/').pop() || '';
              const imagePath = service.path as keyof typeof serviceImages;
              return (
                <ServiceCard 
                  key={service.path}
                  onClick={() => handleServiceClick(service.path)}
                >
                  <img 
                    src={serviceImages[imagePath]} 
                    alt={service.title}
                  />
                  <h3>{service.title}</h3>
                  <p>{serviceDescriptions[pathKey]}</p>
                </ServiceCard>
              );
            })}
          </ServicesContainer>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default ServicesPage;
