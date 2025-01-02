import React from 'react';
import styled from 'styled-components';
import { usePageTitle } from '../hooks/usePageTitle';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const MainContent = styled.main`
  padding-top: 80px; /* Reduced from 120px to match smaller navbar */
  min-height: 100vh;
`;

export const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  usePageTitle(title);
  return <MainContent>{children}</MainContent>;
};
