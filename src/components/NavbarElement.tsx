import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteElement } from "../types/RouteElement"; // Adjust the path if necessary

// Styled components
const NavLink = styled.li<{ active?: boolean; hasChildren?: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.active ? "#e95d22" : "#000")}; /* Highlight active */
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative; /* Needed for dropdown arrow positioning */
  display: flex;
  align-items: center; /* Align text and arrow vertically */

  &:hover {
    color: #e95d22;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Add the dropdown arrow */
  ${(props) =>
    props.hasChildren &&
    `
      &::after {
        content: "▾"; /* Use a lighter arrow pointing downward */
        font-size: 0.8rem; /* Slightly smaller than the text */
        color: inherit; /* Inherit color for consistent styling */
        margin-left: 0.3rem; /* Space between the text and arrow */
        position: relative;
        top: 1px; /* Align arrow with the text baseline */
        pointer-events: none; /* Prevent interaction with the arrow */
      }
    `}
`;

const DropdownMenu = styled.ul`
  display: inherit;
  position: absolute;
  top: 100%; /* Place the dropdown below the NavLink */
  left: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e95d22; /* Add border with the active color */
  border-radius: 4px; /* Optional: Add rounded corners */
  list-style: none;
  padding: 0rem 1rem; /* Add padding inside the dropdown */
  z-index: 1000;
  min-width: 250px; /* Set a wider minimum width for the dropdown */

  li {
    padding: 0.5rem 0; /* Add vertical padding for each item */
    color: #666; /* Default text color for dropdown items */
    font-size: 1rem; /* Adjust font size for readability */
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #e95d22; /* Highlight text color on hover */
    }

    a {
      text-decoration: none;
      color: inherit;
      display: block; /* Ensure the entire item is clickable */
    }
  }
`;

const NavLinkContainer = styled.div`
  position: relative; /* Ensure dropdown is positioned relative to the parent */
  display: inline-block; /* Needed for dropdown alignment */
`;


const DropdownMenuContainer = styled.div`
    display: none; /* Hide the dropdown menu by default */
`;

const NavLinkWithDropdown = styled(NavLinkContainer)`
  &:hover ${DropdownMenuContainer} {
    display: block; /* Show dropdown menu on hover */
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
