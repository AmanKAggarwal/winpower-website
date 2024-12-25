import { RouteElement } from "./types/RouteElement";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DummyPage from "./pages/DummyPage";

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
    component: <DummyPage />,
    children: [
      {
        path: "/services/substations-transmission-distribution-line",
        title: "Substations, Transmission & Distribution Line",
        component: <DummyPage />,
      },
      {
        path: "/services/designing",
        title: "Designing",
        component: <DummyPage />,
      },
      {
        path: "/services/survey-inspection",
        title: "Survey & Inspection",
        component: <DummyPage />,
      }
    ],
  },
  {
    path: "/projects",
    title: "Projects",
    component: <DummyPage />,
  },
  {
    path: "/gallery",
    title: "Gallery",
    component: <DummyPage />,
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    component: <DummyPage />,
  },
];
