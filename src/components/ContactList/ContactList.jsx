import { useSelector } from 'react-redux';
import { FirstColumn, SecondColumn, TableStyled } from './ContactList.styled';
import { phonebookApi, phonebookSelectors } from 'redux/phonebook';
import { useEffect, useState } from 'react';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';

function ContactList() {
  const perPageContacts = 10;

  const { data: contacts = [] } = phonebookApi.useGetContactsQuery();
  const [deleteContact] = phonebookApi.useDeleteContactMutation();
  const filter = useSelector(phonebookSelectors.getFilter);

  const [filterResultStatus, setFilterResultStatus] = useState('idle');
  const [page, setPage] = useState(1);

  const handleDeleteButton = id => {
    deleteContact(id);
  };

  const handleLoadMoreButton = () => setPage(p => p + 1);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    if (!filter && contacts.length) setFilterResultStatus('idle');
    if (!filter && !contacts.length) setFilterResultStatus('no contacts');
    if (filter && !filteredContacts.length) setFilterResultStatus('not found');
  }, [contacts.length, filteredContacts.length, filter]);

  const numberContactsToShow = perPageContacts * page;

  return (
    <>
      {filterResultStatus === 'no contacts' && (
        <p>There are no contacts here yet.</p>
      )}
      {filterResultStatus === 'not found' && (
        <p>There are no contacts with this name.</p>
      )}
      <TableStyled>
        <tbody>
          {filteredContacts
            ?.sort((a, b) => b.id - a.id)
            .slice(0, numberContactsToShow)
            .map(({ id, name, number }) => {
              return (
                <tr key={id}>
                  <FirstColumn>{name}</FirstColumn>
                  <SecondColumn>{number}</SecondColumn>
                  <td>
                    <ButtonDelete
                      type={'button'}
                      data-name={name}
                      onClick={handleDeleteButton}
                      id={id}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </TableStyled>
      <button type="button" onClick={handleLoadMoreButton}>
        Show more contacts
      </button>
    </>
  );
}

export { ContactList };
