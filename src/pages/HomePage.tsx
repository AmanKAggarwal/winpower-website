// src/pages/DummyPage.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the page container
const PageContainer = styled.div`
  min-height: 100vh; /* Ensure the container covers the full height of the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const PageSection = styled.div`
  background-color: gray; /* Set background to gray */
  color: white; /* Set text color to white */
  width: 100%;
  padding: 20rem;
`;

const DummyPage = () => {
  return (
    <PageContainer>
      <PageSection>
        <h1>Header</h1>
        <p>This is a section of the page</p>
      </PageSection>
      <h1>Dummy Page</h1>
      <p>This is a placeholder for a future home page</p>
    </PageContainer>
  );
};

export default DummyPage;
