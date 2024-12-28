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

const AskOurProfessionalsSection: React.FC = () => {
    return (
      <SectionContainer>
        <MaxWidthWrapper>
          <FlexContainer>
            <TextContainer>
              <SectionHeader center={false}>Ask Our Professionals</SectionHeader>
              <p>
                At Win Power Infra Pvt Ltd, we provide integrated service in survey and design 
                embracing the latest and viable technologies. In the last 3 years, we have executed 
                over 5000 KM surveys successfully. We offer our clients with specially trained 
                survey team, who are extremely talented and expert in their field of work. We also 
                undertake "Detailed Project report" preparation services for planning & construction 
                of EHV Lines & substations.
              </p>
            </TextContainer>
            <ImageContainer>
              <img src={Images.SurveyInspectionImage} alt="Construction Worker" />
            </ImageContainer>
          </FlexContainer>
        </MaxWidthWrapper>
      </SectionContainer>
    );
};

const ServicesSection: React.FC = () => {
    return (
      <SectionContainer>
        <MaxWidthWrapper>
          <FlexContainer>
            <ImageContainer>
              <img src={Images.ConstructionWorkerImage} alt="Survey Inspection" />
            </ImageContainer>
            <TextContainer>
              <p>
                Our company also provided services for the study of satellite imagery, top sheets 
                for fixations of alternative routes, walk-over survey for final route, detailing on final 
                route and preparation of BOQ, tower scheduling, benching, revetment assessment 
                and profiling.
              </p>
              <br />
              <p>
                With experienced Chartered Engineers to ensure our inspections are focused on the 
                critical aspects of inspections, we are a one-stop shop for general, principal and 
                specialist inspections and surveys.
              </p>
            </TextContainer>
          </FlexContainer>
        </MaxWidthWrapper>
      </SectionContainer>
    );
};

const ServiceSurveyInspectionPage: React.FC = () => {
  return (
    <div>
      <PageTitleSection
        title="Survey & Inspection"
        leftImagePath={Images.SurveyInspectionHeaderImage}
        rightImagePath={Images.SurveyInspectionHeaderImage}
      />
      <AskOurProfessionalsSection />
      <ServicesSection />
    </div>
  );
};
  
export default ServiceSurveyInspectionPage;
