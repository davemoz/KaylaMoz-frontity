import React from "react";
import { connect, Head } from "frontity";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const Html2React = libraries.html2react.Component;

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");

  return (
    <div>
      <Head>
        <title>Kayla Moz - Posts - {post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <h2>{post.title.rendered}</h2>
      <p>
        <strong>Posted: </strong>
        {formattedDate}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
      <Html2React html={post.content.rendered} />
    </div>
  );
};

export default connect(Post);
