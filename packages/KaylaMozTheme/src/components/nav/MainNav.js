import React from 'react';
import { styled } from "frontity";

import NavLink from './NavLink';

const MainNav = ({ pages }) => {
  return (
    <Nav>
      {pages.map((page) => (
        <NavLink
          key={page[0]}
          href={page[1]}
        >
          {page[0]}
        </NavLink>
      ))
      }
    </Nav>
  )
};

export default MainNav;

const Nav = styled.nav`
  display: flex;
  margin-top: 1em;
`;