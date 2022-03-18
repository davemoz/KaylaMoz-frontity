import React from 'react';
import { styled } from "frontity";

const ProjectCard = ({ project, media }) => {
  return (
    <ProjectLinkWrap
      className='project-card'
      href={project.link}
    >
      {media
        ? <OverflowImg
          src={media.source_url}
          width={media.media_details && media.media_details.sizes.medium.width}
          height={media.media_details && media.media_details.sizes.medium.height}
        />
        : <DefaultImg />
      }
      <ProjectTitle dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
    </ProjectLinkWrap>
  )
};

export default ProjectCard;

const ProjectLinkWrap = styled.a`
  color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

const OverflowImg = styled.img`
  aspect-ratio: 1/1;
  flex: 1 0 auto;
  object-fit: cover;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  font: 100 22px/1.2 'Lato', sans-serif;
  margin: 10px 0 0;
`;

const DefaultImg = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
`;