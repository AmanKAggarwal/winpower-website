import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6e3e3;
  text-align: center;
  height: 17rem;
`;

const ImageContainer = styled.div<{ side: "left" | "right" }>`
  flex: 1;

  img {
    max-height: 30vh;
    max-width: 30vw; /* Adjust as needed */
    filter: brightness(0) contrast(1); /* Turns image black */
    opacity: 0.3; /* Makes it appear gray */
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 3rem;
  color: #e95d22;
  text-transform: uppercase;
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  text-overflow: ellipsis; /* Adds an ellipsis (...) if text overflows */
  text-align: center; /* Optional: Centers the text */
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