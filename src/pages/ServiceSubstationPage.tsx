import React from "react";

import { SectionHeader } from "../components/SectionHeaders";
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
              <SectionHeader center={false}>Planning, Execution, Results</SectionHeader>
              <p>
              Win Power Infra Pvt. Ltd, undertakes turnkey as well as task-oriented projects for EHV, HV ,LT lines & Substations. 
              We specialize in providing complete solutions for designing, sourcing, erection, testing and commissioning of Lines 
              & SS up to 400 KV.
              </p>
              <br />
              <p>
              At Win Power Infra, we have the experience to handle all aspects of the process from material procurement, structure 
              erection, stringing and overall project management. Presently we dealt in all kinds of EHV, HV and LT Lines & substations 
              including SCADA system, HVDS, Mobile SS etc.
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