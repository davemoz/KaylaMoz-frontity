import React from "react";

import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";

import Loading from "../components/Loading";
import Header from "../components/layout/Header";

import Archive from "../posts/Archive";
import Page from "../posts/Page";
import Post from "../posts/Post";
import Project from "../posts/Project";

import Blog from "./Blog";
import Error from "./Error";
import MainContent from '../components/layout/MainContent';

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const title = state.frontity.title;
  const menuItems = state.theme.menu;
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            height: 100%;
          }
          body {
            height: 100%;
          }

          #root {
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          img {
            max-width: 100%;
          }
          h2 {
            margin: 0.5em 0;
          }
          p {
            line-height: 1.25em;
            margin-bottom: 0.75em;
          }
          figcaption {
            color: #828282;
            font-size: 0.8em;
            margin-bottom: 1em;
          }
        `}
      />
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet"></link>
      </Head>
      <Header title={title} navItems={menuItems} />
      <MainContent>
        <Switch>
          <Loading when={data.isFetching} />
          <Blog when={data.isArchive && data.isPostType} />
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Project when={data.isPortfolio} />
          <Error when={data.isError} />
        </Switch>
      </MainContent>
    </>
  );
};

export default connect(Root);
