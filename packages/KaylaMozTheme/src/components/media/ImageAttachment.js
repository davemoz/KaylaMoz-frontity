import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const ImageAttachment = ({ state, postId }) => {

  const media = state.source.attachment[postId];

  if (!media) return <DefaultImg />;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Reduce them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <>
      {/* <pre>{JSON.stringify(media.id, null, 2)}</pre>
      <pre>{JSON.stringify(media.media_details, null, 2)}</pre> */}
      <OverflowImg
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        width={media?.media_details?.width}
        height={media?.media_details?.height}
      />
    </>
  );
};

export default connect(ImageAttachment);

const OverflowImg = styled(Image)`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const DefaultImg = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
`;