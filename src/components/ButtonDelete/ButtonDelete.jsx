import { TiDelete } from 'react-icons/ti';
import { ButtonDeleteStyled } from './ButtonDelete.styled';

const ButtonDelete = ({ dataName, onClick, id }) => {
  return (
    <ButtonDeleteStyled
      type="button"
      data-name={dataName}
      onClick={() => onClick(id)}
    >
      <span>Delete</span>
      <TiDelete />
    </ButtonDeleteStyled>
  );
};

export { ButtonDelete };
