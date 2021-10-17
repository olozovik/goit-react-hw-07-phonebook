import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { phonebookApi } from 'redux/phonebook';
import { Input } from 'components/_share/Input/Input';
import { FormStyled, LabelsWrapper } from './ContactForm.styled';

const ContactForm = () => {
  const { data: contacts = [] } = phonebookApi.useGetContactsQuery();
  const [addContact, { error }] = phonebookApi.useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    setName('');
    setNumber('');
  }, [contacts.length]);

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const isContactExisting = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isContactExisting) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    await addContact({ name, number });
    toast.success(`Contact added`);

    if (error) {
      toast.error(error);
    }
  };

  return (
    <FormStyled autoComplete={'off'} onSubmit={handleSubmit}>
      <LabelsWrapper>
        <label htmlFor={nameInputId}>
          <span>Name:</span>
          <Input
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required={true}
            value={name}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor={numberInputId}>
          <span>Number:</span>
          <Input
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required={true}
            value={number}
            onChange={handleOnChange}
          />
        </label>
      </LabelsWrapper>
      <button type="submit">Add contact</button>
    </FormStyled>
  );
};

export { ContactForm };
