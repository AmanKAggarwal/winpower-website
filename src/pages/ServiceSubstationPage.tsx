import React from "react";

import { 
    MaxWidthWrapper, 
    SectionContainer,
    FlexContainer, 
    TextContainer,
    ImageContainer
  } from "../components/GenericPageComponents";
import PageTitleSection from "../components/PageTitleSection";
import { Images } from "../data/images";

const PlanningExecutionResultsSection: React.FC = () => {
    return (
      <SectionContainer>
        <MaxWidthWrapper>
          <FlexContainer>
            <TextContainer>
              <p>
                Win Power Infracon LLP, undertakes turnkey as well as task-oriented projects for EHV, HV,LT lines & Substations. They are  specialized in providing complete solutions for designing, sourcing, erection, testing and commissioning of Lines & SS up to 400 KV.
              </p>
            </TextContainer>
            <ImageContainer>
              <img src={Images.SubstationHQImage} alt="Substation HQ" />
            </ImageContainer>
          </FlexContainer>
        </MaxWidthWrapper>
      </SectionContainer>
    );
  };

const ServiceSubstationPage: React.FC = () => {
  return (
    <div>
      <PageTitleSection
        title="Substation, Transmission & Distribution Line"
        leftImagePath={Images.Powerline2Image}
        rightImagePath={Images.Powerline3Image}
      />
      <PlanningExecutionResultsSection />
    </div>
  );
};
  
export default ServiceSubstationPage;