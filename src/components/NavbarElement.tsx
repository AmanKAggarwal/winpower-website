import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteElement } from "../types/RouteElement";
import { fadeIn, slideInRight } from "../styles/animations";

// Styled components
const NavLink = styled.li<{ active?: boolean; hasChildren?: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.active ? "#e95d22" : "#000")};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.4rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #e95d22;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #e95d22;

    &::after {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    order: 1;
  }

  ${(props) =>
    props.hasChildren &&
    `
      &::after {
        display: none;
      }

      &::before {
        content: "⌵";
        font-size: 1.2rem;
        color: inherit;
        position: relative;
        top: -2px;
        line-height: 1;
        font-weight: bold;
        transform: scaleY(0.6);
        pointer-events: none;
        transition: transform 0.3s ease;
        order: 2;
        margin-left: auto;
      }

      &:hover::before {
        transform: scaleY(0.6) translateY(2px);
      }
    `}

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    width: 100%;
    justify-content: space-between;

    &::after {
      display: none;
    }

    &:hover {
      transform: translateX(10px);
    }

    ${props => props.hasChildren && `
      &::before {
        display: none;
      }

      &::after {
        display: block;
        content: "⌵";
        position: static;
        background: none;
        font-size: 1.2rem;
        color: inherit;
        margin-left: auto;
        line-height: 1;
        font-weight: bold;
        transform: ${props.active ? 'scaleY(0.6) rotate(180deg)' : 'scaleY(0.6)'};
        pointer-events: none;
        transition: transform 0.3s ease;
        width: auto;
        height: auto;
        order: 2;
      }
    `}
  }
`;

const DropdownMenu = styled.ul`
  display: inherit;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e95d22;
  border-radius: 4px;
  list-style: none;
  padding: 0.5rem 1rem;
  z-index: 1000;
  min-width: 250px;
  animation: ${fadeIn} 0.2s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background: transparent;
  }

  li {
    padding: 0.5rem 0;
    color: #666;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: #e95d22;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #e95d22;

      &::after {
        width: 100%;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      display: block;
      padding: 0.5rem 0;
    }
  }

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

const DropdownMenuContainer = styled.div`
    display: none; /* Hide the dropdown menu by default */

    @media (max-width: 768px) {
      &:hover {
        display: block;
      }
    }
`;

const NavLinkContainer = styled.div`
  position: relative; /* Ensure dropdown is positioned relative to the parent */
  display: inline-block; /* Needed for dropdown alignment */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavLinkWithDropdown = styled(NavLinkContainer)`
  &:hover ${DropdownMenuContainer} {
    display: block; /* Show dropdown menu on hover */
  }

  @media (max-width: 768px) {
    ${DropdownMenuContainer} {
      display: block;
      margin-top: 0.5rem;
    }
  }
`;

const NavbarElement: React.FC<{ route: RouteElement; active: boolean }> = ({ route, active }) => {
  if (route.children && route.children.length > 0) {
    return (
      <NavLinkWithDropdown>
        <NavLink active={active} hasChildren>
          <Link to={route.path}>{route.title}</Link>
        </NavLink>
        <DropdownMenuContainer>
            <DropdownMenu>
                {route.children.map((child) => (
                    <li key={child.path}>
                    <Link to={child.path}>{child.title}</Link>
                    </li>
                ))}
            </DropdownMenu>
        </DropdownMenuContainer>
      </NavLinkWithDropdown>
    );
  } else {
    return (
      <NavLink active={active}>
        <Link to={route.path}>{route.title}</Link>
      </NavLink>
    );
  }
};

export default NavbarElement;
