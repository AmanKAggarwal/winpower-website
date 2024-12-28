import React from "react";
import styled from "styled-components";
import PageTitleSction from "../components/PageTitleSection";
import { UnderlinedSectionHeader } from "../components/SectionHeaders";
import { 
  HeaderSpacer,
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
          <UnderlinedSectionHeader>WIN POWER INFRA PVT LTD</UnderlinedSectionHeader>
          <p>
            <strong>Win Power Infra Pvt. Ltd.</strong> is a pillar of Singhi group of companies,
            and a diversified company <strong>established in 1993</strong> with an objective to bridge
            the gap of sustainable development of power in Rural & semi-urban areas in the North Eastern region.
            The North Eastern region is one of typical & remote terrain where we are successfully delivering our
            goal and brought smiles to millions of people in the hinterland of the country.
            <strong>United Hardware & Electrical Store</strong>, the parent organization of Win Power Infra,
            was <strong>established in 1959</strong>. The group is also involved in manufacturing & supply
            of Cables & conductors, Pre-Stressed poles, Planting & production of Tea, etc.
          </p>
        </TopSection>

        {/* Flex Section */}
        <FlexContainer>
          {/* Image Section */}
          <ImageContainer>
            <img src={Images.GenericConstructionImage} alt="Construction" />
          </ImageContainer>

          {/* Right Text Section */}
          <TextContainer>
            <p>
              Win Power is in the Electrical sector for nearly 25 years and executing projects with consistent
              quality assurance, cost control, and adherence to milestones in a safe environment as per the customer
              requirements. It promotes the culture of sharing rich and varied experience with staff members, as also
              with clients and thereby benefits and helps the growth of the construction fraternity and society at large.
            </p>
          </TextContainer>
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
              A strong, customer-focused approach, conformance to global standards and the constant
              quest for top-class quality have enabled the group to sustain leadership in its major lines
              of business for over 60 years. As a result, we are now one of the stable & reliable companies
              in the North-eastern region. Our vendors include Taikai Group of Industries (China), Shanghai
              Jiameng International Trading Co. Ltd. (China), ABB Ltd., Siemens Ltd., GE, Alstom, Toshiba,
              Schneider, Crompton Greaves, Bajaj, Havel’s, KEI, etc. The company’s operations are characterized
              by an overriding emphasis on safety, on-time delivery, cost competitiveness, and high-quality
              standards with a focus on best-in-class practices.
            </p>
          </TextContainer>
          <ImageContainer>
            <img src={Images.BuildingImage} alt="Building" />
          </ImageContainer>
        </FlexContainer>

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

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <HeaderSpacer />
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