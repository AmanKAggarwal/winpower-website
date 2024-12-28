import React from 'react';
import styled from 'styled-components';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { HeaderSpacer } from '../components/GenericPageComponents';
import PageTitleSection from '../components/PageTitleSection';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background: #f8f8f8;
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
  transition: all 0.3s ease;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.6;
  transition: color 0.3s ease;
`;

const ContactCard = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: #E85D24;
    
    ${CardTitle}, ${CardContent} {
      color: white;
    }
    
    ${Icon} {
      background: white;
    }
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f8f8;
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

const ContactPage: React.FC = () => {
  return (
    <div>
      <HeaderSpacer />
      <PageTitleSection
        title="Contact Us"
      />
      <ContactContainer>
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
              projects@winpowerinfra.com
            </CardContent>
          </ContactCard>

          <ContactCard>
            <Icon>
              <MdPhone />
            </Icon>
            <CardTitle>Contact</CardTitle>
            <CardContent>
              0361-2460222<br />
              (+91) 9531101669
            </CardContent>
          </ContactCard>
        </ContactGrid>

        <Footer>
          <h3>WIN POWER INFRA PVT LTD helps you build your dream project.</h3>
          <p>For any updates and events kindly follow us on social media:</p>
          <SocialLinks>
            <a href="https://www.facebook.com/winpowerinfra" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </SocialLinks>
        </Footer>
      </ContactContainer>
    </div>
  );
};

export default ContactPage;
