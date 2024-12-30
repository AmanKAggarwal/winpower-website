import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.div`
  position: relative;
  background-color: #e6e3e3;
  max-height: 400px;
  padding: 120px 0 40px 0; /* 120px top padding to clear navbar */
  margin-top: 0;
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div<{ hasImages: boolean }>`
  position: relative;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${props => props.hasImages ? '1fr 2fr 1fr' : '1fr'};
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ImageContainer = styled.div<{ side: "left" | "right" }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: auto;
    max-height: 240px; /* Adjusted to account for the increased padding */
    max-width: 100%;
    filter: brightness(0) contrast(1);
    opacity: 0.3;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #e95d22;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.3;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
    line-height: 1.4;
    padding: 0 1rem;
  }
`;

interface PageTitleSectionProps {
  title: string;
  leftImagePath?: string;
  rightImagePath?: string;
}

const PageTitleSection: React.FC<PageTitleSectionProps> = ({
  title,
  leftImagePath,
  rightImagePath,
}) => {
  const hasImages = Boolean(leftImagePath) || Boolean(rightImagePath);
  
  return (
    <SectionContainer>
      <ContentWrapper hasImages={hasImages}>
        {leftImagePath && (
          <ImageContainer side="left">
            <img src={leftImagePath} alt="Left decoration" />
          </ImageContainer>
        )}
        <Title>{title}</Title>
        {rightImagePath && (
          <ImageContainer side="right">
            <img src={rightImagePath} alt="Right decoration" />
          </ImageContainer>
        )}
      </ContentWrapper>
    </SectionContainer>
  );
};

export default PageTitleSection;