import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../Routes"; // Ensure correct path
import { Images } from "../data/images";
import NavbarElement from "./NavbarElement";
// Styled components
interface NavbarContainerProps {
  isScrolled: boolean;
}

const NavbarContainer = styled.nav<NavbarContainerProps>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: ${props => props.isScrolled ? '#ffffff' : 'transparent'};
  transition: background-color 0.3s ease;
  box-shadow: ${props => props.isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
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
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the initial viewport
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
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
