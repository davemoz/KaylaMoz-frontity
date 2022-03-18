import { useState, useEffect } from 'react';

import FilterBtn from './FilterBtn';

const Filter = ({ tax, state, actions }) => {
  const terms = state.source[tax];
  const [selected, setSelected] = useState(state.theme.selectedProjectFilters[tax]);
  const updateFunction = actions.theme.updateProjectFilters;

  const _handleInputChange = (termId) => {
    if (selected.indexOf(termId) !== -1) {
      const copiedState = [...selected];
      const idx = copiedState.indexOf(termId);
      copiedState.splice(idx, 1);
      return setSelected(copiedState);
    }
    else {
      return setSelected(existing => [...existing, termId]);
    }
  }

  useEffect(() => {
    updateFunction(tax, selected);
  }, [tax, selected]);

  return (
    <ul className={`${tax}-filter`}>
      <h3>{tax}</h3>
      {!!terms && Object.values(terms).map(term => {
        const isSelected = !!selected[tax] && Object.values(selected[tax]).includes(term.id);
        return (
          <li key={term.id}>
            <FilterBtn tax={tax} termSlug={term.slug} termId={term.id} isSelected={isSelected} changeHandler={_handleInputChange}>{term.name}</FilterBtn>
          </li>
        )
      })}
      {!!selected && selected.map(vals => {
        return (
          <pre key={vals}>
            {JSON.stringify(vals)}
          </pre>
        )
      })
      }
    </ul>
  )
}

export default Filter;