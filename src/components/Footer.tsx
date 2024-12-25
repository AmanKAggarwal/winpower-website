import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../Routes"; // Import your routes for dynamic links

import footerData from "../contents/footer.json"; // Import JSON file
import FooterData from "../types/FooterData"; // Import FooterData type

// Styled Components
// Styled Components
const FooterHeader = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

const FooterDescription = styled.p`
  line-height: 1.6;
`;

const CompanyDescriptionWrapper = styled.div`
  flex: 0 0 30%; /* Occupy exactly 30% of the width */
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

  li {
    font-size: 0.9rem;
    color: #bbb;
    margin: 0.5rem 0;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: #e95d22; /* Highlight on hover */
      }
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
  }

  a {
    text-decoration: none;
    color: #bbb;

    &:hover {
      color: #e95d22;
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
`;

const CopyrightSection: React.FC = () => {
    const data: FooterData = footerData;

  return (
    <CopyrightWrapper>
      Copyright © {new Date().getFullYear()} {data.companyName} All rights
      reserved.
    </CopyrightWrapper>
  );
};

const FooterContainer = styled.div`
    background-color: #141414;
    color: #d6d6d6;
    padding: 3rem;
`

const FooterVerticalFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const FooterHorizontalFlexbox = styled.div`
    display: flex;
    gap: 2rem;
`

const Spacer = styled.div`
    flex-grow: 1;
`

const Footer: React.FC = () => {
    const data: FooterData = footerData;
  return (
   <FooterContainer>
     <FooterVerticalFlexbox>
        <FooterHorizontalFlexbox>
            <CompanyDescriptionSection
                title={data.companyName.toUpperCase()}
                description={data.about}
            />
            <ServicesSection />
            <Spacer />
            <GetInTouchSection />
        </FooterHorizontalFlexbox>
        <CopyrightSection />
    </FooterVerticalFlexbox>
    </FooterContainer>
  );
};

export default Footer;