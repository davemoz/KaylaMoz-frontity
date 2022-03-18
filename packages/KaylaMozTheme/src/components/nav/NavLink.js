import React from 'react';
import { styled } from "frontity";

import Link from "@frontity/components/link";

const NavLink = ({ href, children }) => {
  return (
    <StyledLink link={href}>
      {children}
    </StyledLink>
  )
};

const StyledLink = styled(Link)`
  margin: 0 12px 0 0;
  color: steelblue;
  text-decoration: none;
`;

export default NavLink;