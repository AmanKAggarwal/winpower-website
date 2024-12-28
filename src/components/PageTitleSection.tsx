import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6e3e3;
  text-align: center;
  min-height: 17rem;
  padding: 120px 0 2rem 0;
  margin-top: 0;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ImageContainer = styled.div<{ side: "left" | "right" }>`
  width: 25%;
  display: flex;
  justify-content: ${props => props.side === "left" ? "flex-start" : "flex-end"};
  align-items: center;

  img {
    max-height: 40vh;
    width: 100%;
    filter: brightness(0) contrast(1);
    opacity: 0.3;
    object-fit: contain;
  }
`;

const Title = styled.h2`
  width: 100%;
  font-size: 3rem;
  color: #e95d22;
  text-transform: uppercase;
  text-align: center;
  padding: 0 1rem;
`;

const PageTitleSection: React.FC<{
  title: string;
  leftImagePath?: string;
  rightImagePath?: string;
}> = ({ title, leftImagePath, rightImagePath }) => {
  return (
    <SectionContainer>
      <ContentWrapper>
        {leftImagePath && (
          <ImageContainer side="left">
            <img src={leftImagePath} alt="Left shadow" />
          </ImageContainer>
        )}
        <Title>{title}</Title>
        {rightImagePath && (
          <ImageContainer side="right">
            <img src={rightImagePath} alt="Right shadow" />
          </ImageContainer>
        )}
      </ContentWrapper>
    </SectionContainer>
  );
};

export default PageTitleSection;