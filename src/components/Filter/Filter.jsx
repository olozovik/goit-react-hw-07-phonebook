import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { phonebookReducer, phonebookSelectors } from 'redux/phonebook';
import { Input } from 'components/_share/Input/Input';
import { LabelStyled } from './Filter.styled';

function Filter() {
  const filterValue = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();
  const inputId = uuidv4();

  return (
    <LabelStyled htmlFor="inputId">
      <span>Find contacts by name:</span>
      <Input
        id={inputId}
        type="text"
        value={filterValue}
        onChange={e => dispatch(phonebookReducer.changeFilter(e.target.value))}
      />
    </LabelStyled>
  );
}

export { Filter };
