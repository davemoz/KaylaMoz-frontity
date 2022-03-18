import React from "react";
import { styled } from "frontity";

import Link from "@frontity/components/link";
import MainNav from '../nav/MainNav';
import ContentWidth from './MainContent';

const Header = ({ title, navItems }) => {
  return (
    <HeaderWrap>
      <ContentWidth>
        <LogoLink link="/">
          <h1>{title}</h1>
        </LogoLink>
        <MainNav pages={navItems} />
      </ContentWidth>
    </HeaderWrap>
  )
};

export default Header;

const HeaderWrap = styled.header`
  background-color: #e5edee;
`;

const LogoLink = styled(Link)`
  color: #4a4a4a;
  display: inline-flex;
  text-decoration: none;
`;