import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../Routes"; // Import your routes for dynamic links

import footerData from "../contents/footer.json"; // Import JSON file
import FooterData from "../types/FooterData"; // Import FooterData type

// Styled Components
const FooterHeader = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #fff;
`;

const FooterDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const CompanyDescriptionWrapper = styled.div`
  flex: 0 0 30%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin-bottom: 2rem;
  }
`;

const CompanyDescriptionSection: React.FC<{ title: string; description: string }> = ({
    title,
    description,
}) => {
    return (
        <CompanyDescriptionWrapper>
        <FooterHeader>{title}</FooterHeader>
        <FooterDescription>{description}</FooterDescription>
        </CompanyDescriptionWrapper>
    );
};

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;

  li {
    font-size: 0.9rem;
    color: #bbb;
    margin: 0.5rem 0;

    a {
      text-decoration: none;
      color: inherit;
      display: block;
      padding: 0.5rem 0;

      &:hover {
        color: #e95d22;
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    li a {
      padding: 0.7rem 0;
    }
  }
`;

const ServicesSection: React.FC = () => {
    // Extract the services routes dynamically
    const servicesRoutes =
        ROUTES.find((route) => route.title === "Services")?.children || [];

    return (
        <div>
        <FooterHeader>SERVICES</FooterHeader>
        <ServiceList>
            {servicesRoutes.map((service) => (
            <li key={service.path}>
                <Link to={service.path}>{service.title}</Link>
            </li>
            ))}
        </ServiceList>
        </div>
    );
};

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #bbb;

  svg {
    color: #e95d22;
    margin-right: 1rem;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  a {
    text-decoration: none;
    color: #bbb;
    padding: 0.5rem 0;
    display: block;
    word-break: break-word;

    &:hover {
      color: #e95d22;
    }
  }

  span {
    word-break: break-word;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
    
    a, span {
      padding: 0.7rem 0;
    }
  }
`;

const GetInTouchSection: React.FC = () => {
    const data: FooterData = footerData;
  
    return (
      <div>
        <FooterHeader>GET IN TOUCH</FooterHeader>
        <ContactItem>
          <FaMapMarkerAlt />
          <span>{data.location}</span>
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt />
          <span>{data.telephone}</span>
        </ContactItem>
        <ContactItem>
          <FaMobileAlt />
          <span>{data.mobileNumber}</span>
        </ContactItem>
        <ContactItem>
          <FaEnvelope />
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </ContactItem>
        <ContactItem>
            <FaFacebook />
            <a href={data.facebookURL}>{data.facebookURL}</a>
        </ContactItem>
      </div>
    );
  };

const CopyrightWrapper = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;

const CopyrightSection: React.FC = () => {
    const data: FooterData = footerData;

  return (
    <CopyrightWrapper>
      Copyright {new Date().getFullYear()} {data.companyName} All rights
      reserved.
    </CopyrightWrapper>
  );
};

const FooterContainer = styled.div`
  background-color: #141414;
  color: #d6d6d6;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Footer: React.FC = () => {
  const data: FooterData = footerData;

  return (
    <FooterContainer>
      <FooterContent>
        <CompanyDescriptionSection
          title={data.companyName}
          description={data.about}
        />
        <ServicesSection />
        <GetInTouchSection />
      </FooterContent>
      <CopyrightSection />
    </FooterContainer>
  );
};

export default Footer;