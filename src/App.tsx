import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";

const renderRoutes = (routes: typeof ROUTES) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.component}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {renderRoutes(ROUTES)}
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
