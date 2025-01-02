import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../Routes"; 
import { Images } from "../data/images";
import NavbarElement from "./NavbarElement";
import { Link } from "react-router-dom";
import { fadeIn, slideInRight } from "../styles/animations";

// Styled components

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
  background: #000000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #000000;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    gap: 1rem;
    animation: ${slideInRight} 0.3s ease-out;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #ffffff;
    margin: 4px 0;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavbarContainer>
      <Link to="/">
        <LogoImage src={Images.WinpowerLogoImage} alt="Winpower Logo" />
      </Link>

      <NavLinks $isOpen={isOpen}>
        {ROUTES.map((route) => (
          <NavbarElement
            key={route.path}
            route={route}
            active={location.pathname === route.path}
          />
        ))}
      </NavLinks>

      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </HamburgerButton>
    </NavbarContainer>
  );
};

export default Navbar;
