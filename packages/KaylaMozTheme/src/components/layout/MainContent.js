import { deviceWidths, getMediaQuery } from '../../utils/media-queries';
import { styled } from "frontity";

const ContentWidth = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  )
};

export default ContentWidth;

const Main = styled.main`
  flex: 1 0 auto;
  padding: 40px;

  ${getMediaQuery(deviceWidths[768])} {
    padding: 40px 80px;
  }
`;
