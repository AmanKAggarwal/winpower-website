import styled from "styled-components";


export const HeaderSpacer = styled.div`
  height: 7rem;
`;


export const MaxWidthWrapper = styled.div`
  max-width: 75rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #ffffff;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout on wide screens */
    justify-content: space-between;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: justify;

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #333;
  }
`;

export const ImageContainer = styled.div`
  margin: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;