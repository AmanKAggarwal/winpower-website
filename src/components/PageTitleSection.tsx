import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #f6f5f5;
  position: relative;
  text-align: center;
  height: 17rem;
  gap: 4rem;
`;

const ImageContainer = styled.div<{ side: "left" | "right" }>`
  flex: 1;
  display: ${({ side }) => (side === "left" || side === "right" ? "flex" : "none")};
  justify-content: ${({ side }) => (side === "left" ? "flex-end" : "flex-start")};
  padding: 1rem;

  img {
    max-width: 200px; /* Adjust as needed */
    filter: brightness(0) contrast(1); /* Turns image black */
    opacity: 0.3; /* Makes it appear gray */
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 3rem;
  color: #e95d22;
  text-transform: uppercase;
`;

const PageTitleSection: React.FC<{
  title: string;
  leftImagePath?: string;
  rightImagePath?: string;
}> = ({ title, leftImagePath, rightImagePath }) => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

export default PageTitleSection;