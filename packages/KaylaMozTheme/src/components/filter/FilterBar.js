import { styled } from 'frontity';

import Filter from './Filter';

const FilterBar = ({ taxonomies, state, actions }) => {
  return (
    <FiltersWrap>
      {taxonomies.map(tax => {
        return (
          <Filter key={tax.taxonomy} tax={tax.taxonomy} state={state} actions={actions} />
        )
      })}
    </FiltersWrap>
  )
};

export default FilterBar;

const FiltersWrap = styled.div`
  display: flex;
  padding: 2em 0 3em;
`;