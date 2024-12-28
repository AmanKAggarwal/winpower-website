import React from "react";

import { SectionHeader } from "../components/SectionHeaders";
import { 
    HeaderSpacer,
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
              <SectionHeader center={false}>Ideal Design For Your Need</SectionHeader>
              <p>
                Win Power Infra Pvt Ltd has an in-house design team that works on the designing 
                process of transmission towers as per the customer requirement. Our team uses latest 
                software, such as, PLS- Tower, iTOWERS Designing TL and STAAD-Pro for designing 
                and bocad-3D, AutoDesk inventor and progeCAD for detailing of tower.
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
      <HeaderSpacer />
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
