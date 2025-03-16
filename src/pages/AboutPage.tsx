import React from "react";
import styled from "styled-components";
import PageTitleSction from "../components/PageTitleSection";
import { UnderlinedSectionHeader } from "../components/SectionHeaders";
import { 
  MaxWidthWrapper, 
  SectionContainer,
  FlexContainer, 
  TextContainer,
  ImageContainer,
} from "../components/GenericPageComponents";

import { Images } from "../data/images";

const TopSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
    text-align: justify;

    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;


const ImageCard = styled.div`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  max-width: 400px;
  background-color: white;
  margin: 4rem;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;


const QuoteSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #f8f8f8;
  position: relative;
  text-align: center;
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  line-height: 1.6;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust text size for smaller screens */
  }
`;

const Underline = styled.div`
  width: 50px;
  height: 3px;
  background-color: #e95d22; /* Orange underline */
  margin: 1rem auto 0;
`;


const AboutUsSection: React.FC = () => {
  return (
    <SectionContainer>
      <MaxWidthWrapper>
        {/* Top Section */}
        <TopSection>
          <UnderlinedSectionHeader>M/s Win Power Infracon LLP</UnderlinedSectionHeader>
          <p>
            M/s Win Power Infracon LLP is an ISO 9001:2015 certified company with an objective to bridge the gap of sustainable development
            of power in Rural and Semi Urban areas in North Eastern Region.  The North Eastern region is one of the typical
            & remote terrains where they are successfully delivering the goal and bought smiles to millions of people in 
            the hinterland of the country. The company is driven by Mr. Suresh Kr. Agarwalla (CEO & Managing Partner)

            The root of the company is associated with M/S United hardware & Electrical stores which was formed by Late 
            Shri Madanlal Agarwalla(Singhi), the founder of the group, in 1959. The key focus of the company 
            is to explore to untap potentials in Power & renewable energy sector to its optimum level. The company is 
            rapidly growing and extending its footprints in Civil, Real Estate, roads & bridges etc. 
            Presently the company is executing projects with consistent quality assurance, cost control and adherence to milestones in a safe environment as per the customer requirement. We Promote the culture of sharing rich and varied experience with staff members, as also with clients and thereby benefits and help the growth of the construction fraternity and society at large.  
          </p>
        </TopSection>

        <TextContainer>
            <p>
              The Company has been closely associated with the country's infrastructure building by executing 
              various challenging projects with critical designs to avoid any form of bad impact on nature. 
              The top clienteles include:
            </p>
            <ul>
              <li>Assam Power Distribution Company Limited</li>
              <li>Assam Electricity Grid Corporation Limited</li>
              <li>Assam Power Generation Company Ltd.</li>
              <li>Reliance Consumer Products Ltd.</li>
              <li>Oil India Ltd.</li>
            </ul>
        </TextContainer>
        <FlexContainer>
          <ImageCard>
            <img src={Images.CraneImage} alt="Crane Construction" />
          </ImageCard>
          <ImageCard>
            <img src={Images.PowerlineImage} alt="Power Lines" />
          </ImageCard>
        </FlexContainer>
      </MaxWidthWrapper>
    </SectionContainer>
  );
};

const QuoteSection: React.FC<{ quote: string }> = ({
  quote,
}) => {
  return (
    <QuoteSectionContainer>
      <QuoteText>{quote}</QuoteText>
      <Underline />
    </QuoteSectionContainer>
  );
};

const CustomerFirstSection: React.FC = () => {
  return (
    <SectionContainer>
      <MaxWidthWrapper>
        <FlexContainer>
          <TextContainer>
            <UnderlinedSectionHeader center={false}>Customer First</UnderlinedSectionHeader>
            <p>
              {/* todo */}
              A strong, customer-focused approach, conformance to global standards and the constant
              quest for top-class quality have enabled the group to sustain leadership in its major lines
              of business for over 60 years. As a result, we are now one of the stable & reliable companies
              in the North-eastern region. Our vendors include Taikai Group of Industries (China), Shanghai
              Jiameng International Trading Co. Ltd. (China), ABB Ltd., Siemens Ltd., GE, Alstom, Toshiba,
              Schneider, Crompton Greaves, Bajaj, Havel's, KEI, etc. The company's operations are characterized
              by an overriding emphasis on safety, on-time delivery, cost competitiveness, and high-quality
              standards with a focus on best-in-class practices.
            </p>
          </TextContainer>
          <ImageContainer>
            <img src={Images.BuildingImage} alt="Building" />
          </ImageContainer>
        </FlexContainer>
      </MaxWidthWrapper>
    </SectionContainer>
  );
};

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <PageTitleSction
        title="About Us"
        leftImagePath={Images.AboutUsTitleImage}
        rightImagePath={Images.AboutUsTitleImage}
      />
      <AboutUsSection />
      <QuoteSection
        quote="Our prime focus is to maintain high standard of quality construction within stipulated timeline."
      />
      <CustomerFirstSection />
    </div>
  );
};

export default AboutUsPage;