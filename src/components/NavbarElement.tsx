import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteElement } from "../types/RouteElement";
import { fadeIn, slideInRight } from "../styles/animations";

// Styled components
/**
 * Styled component for a navigation link.
 * 
 * @param {boolean} $active - Whether the link is active.
 */
const NavLink = styled(Link)<{ $active?: boolean }>`
  font-size: 1rem;
  color: ${(props) => props.$active ? "#e95d22" : "#ffffff"};
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.4rem;
  text-decoration: none;
  flex: 1;
  white-space: nowrap;

  // Underline animation for non-dropdown items
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #e95d22;
    transition: width 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #e95d22;
    
    &::after {
      width: 100%;
    }
  }

  // Mobile styles
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    width: 100%;
    justify-content: space-between;
    white-space: normal;

    &::after {
      display: none;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;

const DropdownIcon = styled.button<{ $active?: boolean; $isOpen?: boolean }>`
  font-size: 1.2rem;
  margin-left: 0.4rem;
  line-height: 1;
  font-weight: bold;
  transform: scaleY(0.6) ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  background: none;
  border: none;
  color: inherit;
  padding: 8px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    padding: 12px;
    color: ${props => props.$active ? "#e95d22" : "#ffffff"};
  }
`;

const DesktopDropdownIcon = styled.span`
  font-size: 1.2rem;
  margin-left: 0.4rem;
  line-height: 1;
  font-weight: bold;
  transform: scaleY(0.6);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenuContainer = styled.div<{ $isOpen?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: #000000;
  min-width: 200px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    position: static;
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transform: none;
    box-shadow: none;
    height: ${props => props.$isOpen ? 'auto' : '0'};
    padding: ${props => props.$isOpen ? '1rem 0' : '0'};
    overflow: hidden;
    min-width: 100%;
  }
`;

const DropdownMenuItem = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    display: block;
    width: 100%;
    padding: 0.5rem 0;

    &:hover {
      color: #e95d22;
    }
  }
`;

const NavLinkWithDropdown = styled.div`
  position: relative;

  @media (min-width: 769px) {
    &:hover ${DropdownMenuContainer} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const NavLinkWrapper = styled.li<{ hasChildren?: boolean }>`
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const DropdownMenu = styled.ul`
  display: inherit;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid #e95d22;
  border-radius: 4px;
  list-style: none;
  padding: 0.5rem 1rem;
  z-index: 1000;
  min-width: 250px;
  animation: ${fadeIn} 0.2s ease-out;

  li {
    padding: 0.5rem 0;
    color: #ffffff;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #e95d22;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;

    &:hover {
      color: #e95d22;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background: transparent;
  }

  // Mobile styles
  @media (max-width: 768px) {
    position: static;
    transform: none;
    box-shadow: none;
    border: none;
    border-left: 2px solid #e95d22;
    margin-left: 1rem;
    padding: 0 0 0 1rem;
    min-width: unset;
    width: 100%;
    animation: ${slideInRight} 0.3s ease-out;

    &::before {
      display: none;
    }

    li {
      padding: 0.5rem 0;
      
      &::after {
        display: none;
      }
      
      &:hover {
        transform: translateX(8px);
      }
    }
  }
`;

const NavLinkContainer = styled.div`
  position: relative; /* Ensure dropdown is positioned relative to the parent */
  display: inline-block; /* Needed for dropdown alignment */

  // Mobile styles
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavLinkWithDropdownContainer = styled(NavLinkContainer)`
  &:hover ${DropdownMenuContainer} {
    display: block; /* Show dropdown menu on hover */
  }

  // Mobile styles
  @media (max-width: 768px) {
    ${DropdownMenuContainer} {
      display: block;
      margin-top: 0.5rem;
    }
  }
`;

/**
 * NavbarElement component.
 * 
 * @param {RouteElement} route - The route element.
 * @param {boolean} active - Whether the route is active.
 */
interface NavbarElementProps {
  route: RouteElement;
  active: boolean;
}

const NavbarElement: React.FC<NavbarElementProps> = ({ route, active }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (route.children) {
    return (
      <NavLinkWithDropdown>
        <NavLinkWrapper>
          <NavLink to={route.path} $active={active}>
            {route.title}
            <DesktopDropdownIcon>⌵</DesktopDropdownIcon>
          </NavLink>
          <DropdownIcon 
            onClick={handleDropdownClick}
            $active={active}
            $isOpen={isDropdownOpen}
          >
            ⌵
          </DropdownIcon>
        </NavLinkWrapper>
        <DropdownMenuContainer $isOpen={isDropdownOpen}>
          {route.children.map((child) => (
            <DropdownMenuItem key={child.path}>
              <Link to={child.path}>{child.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContainer>
      </NavLinkWithDropdown>
    );
  }

  return (
    <NavLinkWrapper>
      <NavLink to={route.path} $active={active}>
        {route.title}
      </NavLink>
    </NavLinkWrapper>
  );
};

export default NavbarElement;
