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
              Established by strong team of professionals, the company is emerging player that stands firm to upkeep practice of offering the finest spaces to their customers. The construction services are all about flexibility, innovation, and above all results. The experienced team and dynamic designers of the company always focus on precise wishes for delivering cost-effective solutions to any project.
              </p>
            </TextContainer>
            <ImageContainer>
              <img src={Images.GenericConstructionImage} alt="Design Building Blueprint" />
            </ImageContainer>
          </FlexContainer>
        </MaxWidthWrapper>
      </SectionContainer>
    );
};

const ServicesCivilConstruction: React.FC = () => {
  return (
    <div>
      <PageTitleSection
        title="Civil Construction"
        leftImagePath={Images.CompassDrawingImage}
        rightImagePath={Images.CompassDrawingImage}
      />
      <IdealDesignSection />
    </div>
  );
};
  
export default ServicesCivilConstruction;
