import React from 'react';
import { styled } from "frontity";
import ImageAttachment from '../media/ImageAttachment';

const ProjectCard = ({ project }) => {
  return (
    <ProjectLinkWrap
      className='project-card'
      href={project.link}
    >
      <ImageAttachment postId={project.featured_media} />
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

const ProjectTitle = styled.h2`
  font: 100 22px/1.2 'Lato', sans-serif;
  margin: 10px 0 0;
`;