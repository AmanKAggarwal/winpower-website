import { RouteElement } from "./types/RouteElement";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import DummyPage from "./pages/DummyPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceSubstationPage from "./pages/ServiceSubstationPage";
import ServiceDesigningPage from "./pages/ServiceDesigningPage";
import ServiceSurveyInspectionPage from "./pages/ServiceSurveyInspectionPage";
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export const ROUTES: RouteElement[] = [
  {
    path: "/",
    title: "Home",
    component: <HomePage />,
  },
  {
    path: "/about-us",
    title: "About Us",
    component: <AboutPage />,
  },
  {
    path: "/services",
    title: "Services",
    component: <ServicesPage />,
    children: [
      {
        path: "/services/substations-transmission-distribution-line",
        title: "Substations, Transmission & Distribution Line",
        component: <ServiceSubstationPage />,
      },
      {
        path: "/services/designing",
        title: "Designing",
        component: <ServiceDesigningPage />,
      },
      {
        path: "/services/survey-inspection",
        title: "Survey & Inspection",
        component: <ServiceSurveyInspectionPage />,
      }
    ],
  },
  // {
  //   path: "/projects",
  //   title: "Projects",
  //   component: <DummyPage />,
  // },
  {
    path: "/gallery",
    title: "Gallery",
    component: <GalleryPage />,
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    component: <ContactPage />,
  },
];
