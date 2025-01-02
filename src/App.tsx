import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "./Routes";
import { RouteElement } from "./types/RouteElement";
import { PageWrapper } from "./components/PageWrapper";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000000;
  }

  html {
    overflow-x: hidden;
  }

  #root {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }
`;

const getFlattenedRouteElements = (routes: RouteElement[]): RouteElement[] => {
  const flattenedRoutes = [];
  for (const route of routes) {
    flattenedRoutes.push(route);
    if (route.children) {
      const flattened = getFlattenedRouteElements(route.children);
      flattenedRoutes.push(...flattened);
    }
  }
  return flattenedRoutes;
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const routeElements = getFlattenedRouteElements(ROUTES);
  
  // Find the current route to get its title
  const currentRoute = routeElements.find(route => route.path === location.pathname);
  const pageTitle = currentRoute?.title || "404 Not Found";

  return (
    <PageWrapper title={pageTitle}>
      <Routes>
        {routeElements.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageWrapper>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
