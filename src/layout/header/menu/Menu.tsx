import * as React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Characters", href: "characters" },
  { title: "Episode", href: "episode" },
  { title: "Location", href: "location" },
];

export const Menu = () => {
  return (
    <MenuList>
      {menuItems.map((item, index) => (
        <Item key={index}>
          <StyledNavLink to={`/${item.href}`}>
            {item.title}
          </StyledNavLink>
        </Item>
      ))}
    </MenuList>
  );
};

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;

const Item = styled.li`
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 22px;
  color: ${theme.colors.font};
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${theme.colors.accent};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.active {
    color: ${theme.colors.accent};
    font-weight: 700;
  }
`;
