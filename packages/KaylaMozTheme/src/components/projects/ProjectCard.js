import React from 'react';
import { styled } from "frontity";
import Image from '@frontity/components/image';

const ProjectCard = ({ project, media }) => {
  return (
    <ProjectLinkWrap
      className='project-card'
      href={project.link}
    >
      {media && media.media_details.sizes.medium_large
        ? <OverflowImg
          src={media.media_details.sizes.medium_large.source_url}
          width={media.media_details.sizes.medium_large && media.media_details.sizes.medium_large.width}
          height={media.media_details.sizes.medium_large && media.media_details.sizes.medium_large.height}
        />
        : media && media.media_details.sizes.large
          ? <OverflowImg
            src={media.media_details.sizes.large.source_url}
            width={media.media_details.sizes.large && media.media_details.sizes.large.width}
            height={media.media_details.sizes.large && media.media_details.sizes.large.height}
          />
          : media && media.source_url
            ? <OverflowImg
              src={media.source_url}
              width={media.media_details.width && media.media_details.width}
              height={media.media_details.height && media.media_details.height}
            />
            : <DefaultImg />
      }
      <ProjectTitle dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
      {/* <pre>{JSON.stringify(media.id, null, 2)}</pre>
      <pre>{JSON.stringify(media.media_details, null, 2)}</pre> */}
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

const OverflowImg = styled(Image)`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  height: auto;
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