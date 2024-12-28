import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../Routes"; // Ensure correct path
import { Images } from "../data/images";
import NavbarElement from "./NavbarElement";
// Styled components
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: transparent; /* Transparent background */
  z-index: 1000;
`;

const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover; /* Ensure the image is resized properly */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const Spacer = styled.div`
  flex-grow: 1; /* Makes the spacer take up all available space */
`;


const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current path

  return (
    <NavbarContainer>
      <LogoImage src={Images.WinpowerLogoImage} alt="Logo" />
      <Spacer />
      <NavLinks>
      {ROUTES.map((route) => (
        <NavbarElement
          key={route.path}
          route={route}
          active={location.pathname === route.path}
        />
      ))}
    </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
