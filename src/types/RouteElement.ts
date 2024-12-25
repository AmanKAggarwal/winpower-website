import React from "react";

export interface RouteElement {
  path: string; // The URL path
  title: string; // The title of the route
  component: React.ReactNode; // The component to render
  children?: RouteElement[]; // Optional nested routes
}
