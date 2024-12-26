import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";
import { RouteElement } from "./types/RouteElement";

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

const App: React.FC = () => {
  const routeElements = getFlattenedRouteElements(ROUTES);

  return (
    <Router>
      <Navbar />
      <Routes>
        {routeElements.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
