import { useDispatch, useSelector } from 'react-redux';
import { ListStyled } from './ContactList.styled';
import { phonebookApi, phonebookSelectors } from 'redux/phonebook';

function ContactList() {
  const { data: contacts = [] } = phonebookApi.useGetContactsQuery();
  const [deleteContact] = phonebookApi.useDeleteContactMutation();

  const filter = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  // useEffect(() => {
  //   if (!filter && contacts.length) setFilterResultStatus('idle');
  //   if (!filter && !contacts.length) setFilterResultStatus('no contacts');
  //   if (filter && !filteredContacts.length) setFilterResultStatus('not found');
  // }, [contacts.length, filteredContacts.length, filter]);

  return (
    <>
      {/*{filterResultStatus === 'no contacts' && (*/}
      {/*  <p>There are no contacts here yet.</p>*/}
      {/*)}*/}
      {/*{filterResultStatus === 'not found' && (*/}
      {/*  <p>There are no contacts with this name.</p>*/}
      {/*)}*/}
      <ListStyled>
        {filteredContacts?.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button
                type={'button'}
                data-name={name}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ListStyled>
    </>
  );
}

export { ContactList };
