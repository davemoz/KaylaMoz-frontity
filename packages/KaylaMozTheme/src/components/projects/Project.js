import React from "react";
import { connect } from "frontity";
import Image from "@frontity/components/image";
import dayjs from "dayjs";

const Project = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const project = state.source[data.type][data.id];
  const featured_image_url =
    state.source.attachment[project.featured_media].source_url;
  const Html2React = libraries.html2react.Component;

  const formattedDate = dayjs(project.date).format("DD MMMM YYYY");

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
      <p>
        <strong>Posted: </strong>
        {formattedDate}
      </p>
      <Image src={featured_image_url} />
      <Html2React html={project.content.rendered} />
    </div>
  );
};

export default connect(Project);
