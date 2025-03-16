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

const IdealDesignSection: React.FC = () => {
    return (
      <SectionContainer>
        <MaxWidthWrapper>
          <FlexContainer>
            <TextContainer>
              <p>
              The company have developed a well equipped and expert panel for providing all kinds of technical support and complete solution for any kind electrical and civil projects and their feasibility etc.
              </p>
            </TextContainer>
            <ImageContainer>
              <img src={Images.DesignBuildingImage} alt="Design Building Blueprint" />
            </ImageContainer>
          </FlexContainer>
        </MaxWidthWrapper>
      </SectionContainer>
    );
};

const ServicesConsultancy: React.FC = () => {
  return (
    <div>
      <PageTitleSection
        title="Consultancy"
        leftImagePath={Images.CompassDrawingImage}
        rightImagePath={Images.CompassDrawingImage}
      />
      <IdealDesignSection />
    </div>
  );
};
  
export default ServicesConsultancy;
