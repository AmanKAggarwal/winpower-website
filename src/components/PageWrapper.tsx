import React from 'react';
import styled from 'styled-components';
import { usePageTitle } from '../hooks/usePageTitle';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* Height of navbar (40px) + padding (20px) */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-top: 55px; /* Adjusted for mobile navbar height */
  }
`;

const MainContent = styled.main`
  min-height: 100vh;
  width: 100%;
`;

export const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  usePageTitle(title);
  return (
    <PageContainer>
      <MainContent>{children}</MainContent>
    </PageContainer>
  );
};
