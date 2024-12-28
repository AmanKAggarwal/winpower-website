import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../Routes"; 
import { Images } from "../data/images";
import NavbarElement from "./NavbarElement";
import { fadeIn, slideInRight } from "../styles/animations";

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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
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
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 1rem;
    animation: ${slideInRight} 0.3s ease-out;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  color: #e95d22;
  font-size: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: rgba(233, 93, 34, 0.1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the initial viewport
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LogoImage src={Images.WinpowerLogoImage} alt="Logo" />
      <Spacer />
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '☰'}
      </HamburgerButton>
      <NavLinks $isOpen={isOpen}>
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
