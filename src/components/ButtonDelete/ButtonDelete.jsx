import { TiDelete } from 'react-icons/ti';
import Loader from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { toast } from 'react-hot-toast';
import { phonebookApi } from 'redux/phonebook';
import { ButtonDeleteStyled } from './ButtonDelete.styled';

const ButtonDelete = ({ id }) => {
  const [deleteContact, { isLoading, error }] =
    phonebookApi.useDeleteContactMutation();

  const theme = useTheme();

  const handleDeleteButton = () => {
    deleteContact(id);
    toast.success('Contact deleted');
    if (error) {
      toast.error(error);
    }
  };
  return (
    <ButtonDeleteStyled
      type="button"
      onClick={() => handleDeleteButton(id)}
      disabled={isLoading && true}
    >
      <span>Delete</span>
      {isLoading ? (
        <Loader
          type="Oval"
          height={15}
          width={15}
          color={theme.buttonActiveHover}
        />
      ) : (
        <TiDelete />
      )}
    </ButtonDeleteStyled>
  );
};

export { ButtonDelete };
