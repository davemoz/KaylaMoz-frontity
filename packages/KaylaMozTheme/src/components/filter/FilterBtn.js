import { styled } from 'frontity';

const CheckboxInput = ({ tax, termSlug, termId, isSelected, changeHandler }) => {
  return (
    <input
      className={isSelected ? 'selected' : ''}
      type='checkbox'
      value={termId}
      id={termSlug}
      name={termSlug}
      onChange={() => changeHandler(termId)}
    />
  )
};

const FilterBtn = ({ tax, termSlug, termId, isSelected, changeHandler, children }) => {
  return (
    <>
      <StyledCheckbox tax={tax} termSlug={termSlug} termId={termId} isSelected={isSelected} changeHandler={changeHandler} />
      <CheckboxLabel htmlFor={termSlug} dangerouslySetInnerHTML={{ __html: children }} />
    </>
  )
};

export default FilterBtn;

const StyledCheckbox = styled(CheckboxInput)`

`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
`;