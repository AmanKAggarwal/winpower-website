import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteElement } from "../types/RouteElement";

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

const NavLinkWrapper = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
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
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: #000000;
  min-width: 250px;
  width: max-content;
  max-width: min(90vw, 400px);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    position: static;
    left: 0;
    transform: none;
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    box-shadow: none;
    height: ${props => props.$isOpen ? 'auto' : '0'};
    padding: ${props => props.$isOpen ? '1rem 0' : '0'};
    overflow: hidden;
    min-width: 100%;
    width: 100%;
    max-width: 100%;
  }
`;

const DropdownMenuItem = styled.div`
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    display: block;
    width: 100%;
    padding: 0.75rem;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.4;
    text-align: center;

    @media (max-width: 768px) {
      text-align: left;
      padding: 0.5rem;
    }

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
      transform: translateX(-50%) translateY(0);
    }
  }
`;

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
