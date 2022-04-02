import { useState } from "react";
import { connect, styled } from "frontity";

import Link from "@frontity/components/link";
import ProjectCard from '../components/projects/ProjectCard';
// import FilterBar from '../components/filter/FilterBar';
import PrevNextNav from '../components/nav/PrevNextNav';

const Archive = ({ state, actions }) => {
  const [data, setData] = useState(state.source.get(state.router.link));
  const themeState = state.theme
  const attachments = state.source.attachment;
  // const taxonomies = state.source.taxonomies;
  // const [projectType, projectTag] = taxonomies;
  // const [selectedTags, setSelectedTags] = useState(themeState.selectedProjectFilters[projectType.taxonomy]);
  // const [selectedTypes, setSelectedTypes] = useState(themeState.selectedProjectFilters[projectTag.taxonomy]);

  return (
    <>
      {/* {data.type === 'portfolio'
        ? <FilterBar taxonomies={taxonomies} state={state} actions={actions} />
        : null}
      {JSON.stringify(selectedTypes)} */}
      <Grid>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];

          switch (post.type) {
            case 'portfolio':
              // if (selectedTypes.every(type => post['project-type'].includes(type))
              //   && selectedTags.every(tag => post['project-tag'].includes(tag))) {
              return (
                <ProjectCard
                  key={post.id}
                  project={post}
                />
              );
            // }
            case 'post':
              return (
                <Link
                  key={post.id}
                  link={post.link}
                  dangerouslySetInnerHTML={{ __html: `Blog post: ${post.title.rendered}` }}
                ></Link>
              );
            default:
              return (
                <Link
                  key={post.id}
                  link={post.link}
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></Link>
              );
          }
        })}
      </Grid>
      <PrevNextNav data={data} actions={actions} />
    </>
  );
};

export default connect(Archive);

const Grid = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`;
