import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { ContactsHeadingStyled, MainHeadingStyled } from './App.styled';
import { Page } from 'components/Page/Page';

const App = () => {
  return (
    <Page>
      <Wrapper>
        <MainHeadingStyled>Phonebook</MainHeadingStyled>
        <ContactForm />
        <ContactsHeadingStyled>Contacts</ContactsHeadingStyled>
        <Filter />
        <ContactList />
        <Toaster />
      </Wrapper>
    </Page>
  );
};

export default App;
