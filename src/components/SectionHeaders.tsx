import styled from "styled-components";

interface SectionHeaderProps {
  center?: boolean;
}

export const SectionHeader = styled.h1<SectionHeaderProps>`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

const SectionHeaderContainer = styled.div<{ center?: boolean }>`
  text-align: ${(props) => (props.center ? "center" : "left")}; /* Center or left align */
  margin-bottom: 1.5rem; /* Space below the underline */
`;

const Underline = styled.hr<{ center?: boolean }>`
  width: 7rem;
  height: 0.1rem;
  background-color: #e95d22; /* Orange color */
  border: none;
  margin: ${(props) => (props.center ? "1rem auto" : "1rem")}; /* Center the underline if needed */
`;

export const UnderlinedSectionHeader: React.FC<{ center?: boolean; children: React.ReactNode }> = ({
  center = true, // Default to center-aligned
  children,
}) => {
  return (
    <SectionHeaderContainer center={center}>
      <SectionHeader center={center}>{children}</SectionHeader>
      <Underline center={center} />
    </SectionHeaderContainer>
  );
};
