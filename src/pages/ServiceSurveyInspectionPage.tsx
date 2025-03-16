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

const AskOurProfessionalsSection: React.FC = () => {
    return (
      <SectionContainer>
        <MaxWidthWrapper>
          <FlexContainer>
            <TextContainer>
              <p>
              Win Power Infracon LLP provides integrated service in survey and design embracing the latest and viable technologies. 
              The company also provides services for the study of satellite imagery, top sheets for fixations of alternative routes, walk-over survey for final route, detailing on final route and preparation of BOQ, tower scheduling, benching, revetment assessment and profiling.
              We are a one-stop shop for general, principal and specialist inspections and surveys.
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
