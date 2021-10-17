import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { phonebookApi, phonebookSelectors } from 'redux/phonebook';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import {
  FirstColumn,
  LoadMoreButton,
  SecondColumn,
  TableStyled,
} from './ContactList.styled';

function ContactList() {
  const perPageContacts = 10;

  const { data: contacts = [], error } = phonebookApi.useGetContactsQuery();

  const filter = useSelector(phonebookSelectors.getFilter);

  const [filterResultStatus, setFilterResultStatus] = useState('idle');
  const [page, setPage] = useState(1);

  const handleLoadMoreButton = () => setPage(p => p + 1);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    if (error) {
      toast.error(error.status);
    }
  }, [error]);

  useEffect(() => {
    if (!filter && contacts.length) setFilterResultStatus('idle');
    if (!filter && !contacts.length) setFilterResultStatus('no contacts');
    if (filter && !filteredContacts.length) setFilterResultStatus('not found');
  }, [contacts.length, filteredContacts.length, filter]);

  const numberContactsToShow = perPageContacts * page;
  const isLoadMore = numberContactsToShow < filteredContacts.length;

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
                    <ButtonDelete id={id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </TableStyled>
      {isLoadMore && (
        <LoadMoreButton type="button" onClick={handleLoadMoreButton}>
          Show more contacts...
        </LoadMoreButton>
      )}
    </>
  );
}

export { ContactList };
