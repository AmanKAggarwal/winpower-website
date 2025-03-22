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
            Win Power Infracon LLP offers end-to-end services in survey and design, integrating the latest viable technologies to deliver precise and efficient solutions. Our expertise spans the study of satellite imagery, analysis of topographic sheets for identifying alternative routes, walk-over surveys for final route selection, detailed engineering on the finalized route, and the preparation of BOQ. We also handle tower scheduling, benching, revetment assessment, and profiling.
            With a team of experienced Chartered Engineers, we ensure that every inspection is focused on the most critical aspects. As a one-stop shop, we provide comprehensive general, principal, and specialist inspections and surveys tailored to meet the highest industry standards.
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


const ServiceSurveyInspectionPage: React.FC = () => {
  return (
    <div>
      <PageTitleSection
        title="Survey & Inspection"
        leftImagePath={Images.SurveyInspectionHeaderImage}
        rightImagePath={Images.SurveyInspectionHeaderImage}
      />
      <AskOurProfessionalsSection />
    </div>
  );
};
  
export default ServiceSurveyInspectionPage;
