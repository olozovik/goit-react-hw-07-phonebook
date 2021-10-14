import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListStyled } from './ContactList.styled';
import { deleteContact } from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import { useGetContactsQuery } from '../../redux/phonebook/phonebook-slice';

function ContactList() {
  const { data } = useGetContactsQuery();
  console.log(data);
  const contacts = data ?? [];
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const [contactsToRender, setContactsToRender] = useState(contacts);
  const [filterResult, setFilterResult] = useState('idle');

  useEffect(() => {
    setContactsToRender(contacts);
  }, [contacts]);

  useEffect(() => {
    setContactsToRender(
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  }, [contacts, filter]);

  useEffect(() => {
    if (!filter && contacts.length) setFilterResult('idle');
    if (!filter && !contacts.length) setFilterResult('no contacts');
    if (filter && !contactsToRender.length) setFilterResult('not found');
  }, [contacts.length, contactsToRender.length, filter]);

  return (
    <>
      {filterResult === 'no contacts' && <p>There are no contacts here yet.</p>}
      {filterResult === 'not found' && (
        <p>There are no contacts with this name.</p>
      )}
      <ListStyled>
        {contactsToRender?.map(({ name, number }) => {
          return (
            <li key={name}>
              {name}: {number}
              <button
                type={'button'}
                data-name={name}
                onClick={() => dispatch(deleteContact(name))}
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
