// @ts-nocheck
import { styled } from 'frontity';

const PrevNextNav = ({ data, actions }) => {
  return (
    <NavWrap>
      <ButtonWrap prev>
        {data.previous && (
          <NavButton prev
            onClick={() => {
              actions.router.set(data.previous);
            }}
          >
            &#171; Prev
          </NavButton>
        )}
      </ButtonWrap>
      <ButtonWrap next>
        {data.next && (
          <NavButton next
            onClick={() => {
              actions.router.set(data.next);
            }}
          >
            Next &#187;
          </NavButton>
        )}
      </ButtonWrap>
    </NavWrap>
  )
};

export default PrevNextNav;

const NavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 7em;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: ${props => props.prev ? 'flex-start' : 'flex-end'};
  width: 50%;
`;

const NavButton = styled.button`
  background: #eee;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.5em 1em;
  color: #888;
  font-size: 1em;
  margin-right: ${props => props.prev ? '2em' : 0};

  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;