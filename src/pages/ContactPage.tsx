import React from 'react';
import styled from 'styled-components';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import PageTitleSection from '../components/PageTitleSection';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 0 2rem;
  background: #ffffff;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  font-size: 1.2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E85D24;
  font-size: 2.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const CardContent = styled.p`
  color: white;
  line-height: 1.6;
`;

const ContactCard = styled.div`
  background: #E85D24;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  width: 100%;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  
  a {
    margin: 0 1rem;
    color: #E85D24;
    font-size: 1.5rem;
    text-decoration: none;
    
    &:hover {
      color: #d14d1f;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  font-weight: 1000;
  text-transform: uppercase;
`;


const ContactPage: React.FC = () => {
  return (
    <>
      <PageTitleSection
        title="CONTACT US"
      />
      <ContactContainer>
        <Title>GET IN TOUCH</Title>
        <Description>For any query or details kindly contact us.</Description>

        <ContactGrid>
          <ContactCard>
            <Icon>
              <MdLocationOn />
            </Icon>
            <CardTitle>Address</CardTitle>
            <CardContent>
              1st Floor, Basanta Enclave, B. Baruah College Road, Ulubari, Guwahati, Assam - 781007 <br/>(India)
            </CardContent>
          </ContactCard>

          <ContactCard>
            <Icon>
              <MdEmail />
            </Icon>
            <CardTitle>Mail</CardTitle>
            <CardContent>
              winpowerinfraconllp@gmail.com
            </CardContent>
          </ContactCard>

          <ContactCard>
            <Icon>
              <MdPhone />
            </Icon>
            <CardTitle>Contact</CardTitle>
            <CardContent>
              0361-2460222<br />
            </CardContent>
          </ContactCard>
        </ContactGrid>

        <Footer>
          <h3>WIN POWER INFRACON LLP helps you build your dream project.</h3>
          <p>For any updates and events kindly follow us on social media:</p>
          <SocialLinks>
            <a href="https://www.facebook.com/winpowerinfra" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialLinks>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default ContactPage;
