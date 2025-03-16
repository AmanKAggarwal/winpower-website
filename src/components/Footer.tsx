import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ROUTES } from "../Routes";
import footerData from "../contents/footer.json";
import FooterData from "../types/FooterData";
import { fadeIn, slideUp } from "../styles/animations";

// Styled Components
const FooterHeader = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #fff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e95d22;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
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
  animation: ${slideUp} 0.5s ease-out;

  li {
    font-size: 0.9rem;
    color: #bbb;
    margin: 0.5rem 0;
    transition: all 0.3s ease;

    a {
      text-decoration: none;
      color: inherit;
      display: block;
      padding: 0.5rem 0;
      transition: all 0.3s ease;

      &:hover {
        color: #e95d22;
        transform: translateX(10px);
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
  transition: all 0.3s ease;

  svg {
    color: #e95d22;
    margin-right: 1rem;
    font-size: 1.5rem;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #fff;
    
    svg {
      transform: scale(1.2);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 0;
    display: block;
    word-break: break-word;
    transition: all 0.3s ease;

    &:hover {
      color: #e95d22;
      transform: translateX(5px);
    }
  }

  span {
    word-break: break-word;
    transition: all 0.3s ease;
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
          <FaEnvelope />
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </ContactItem>
      </div>
    );
  };

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const CopyrightText = styled.div`
  color: #d6d6d6;
`;

const DesignCredit = styled.div`
  color: #d6d6d6;
`;

const CopyrightSection: React.FC = () => {
  const data: FooterData = footerData;

  return (
    <CopyrightWrapper>
      <CopyrightText>
        Copyright {new Date().getFullYear()} {data.companyName} All rights
        reserved.
      </CopyrightText>
      <DesignCredit>
        Design Inspired by Brand Imprint
      </DesignCredit>
    </CopyrightWrapper>
  );
};

const FooterContainer = styled.div`
  background-color: #141414;
  color: #d6d6d6;
  padding: 3rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: ${slideUp} 0.5s ease-out;

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