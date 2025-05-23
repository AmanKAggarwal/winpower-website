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
              Win Power Infracon LLP, has an in -house design team that works on the designing process of transmission towers as per the customer requirement. The company uses latest software, such as, PLS- Tower, i-tower Designing TL and STAAD-Pro for designing and bocad-3D, AutoDesk inventor and proge CAD for detailing of tower.
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

const ServiceDesigningPage: React.FC = () => {
  return (
    <div>
      <PageTitleSection
        title="Designing"
        leftImagePath={Images.CompassDrawingImage}
        rightImagePath={Images.CompassDrawingImage}
      />
      <IdealDesignSection />
    </div>
  );
};
  
export default ServiceDesigningPage;
