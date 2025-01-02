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
    background-color: #000000;
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
