import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Section, Container, Title, Accent } from './Styled';
import 'react-toastify/dist/ReactToastify.min.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isIncludeName = contacts.some(
      value => value.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludeNumber = contacts.some(
      value =>
        value.number.replace('+', '').split('-').join('') ===
        number.replace('+', '').split('-').join('')
    );

    if (isIncludeName) {
      toast.error(() => (
        <div>
          <Accent>{name}</Accent> is already in contacts
        </div>
      ));
      return;
    }
    if (isIncludeNumber) {
      toast.error(() => (
        <div>
          phonenumber <Accent>{number}</Accent> is already in contacts
        </div>
      ));
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContactsByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContactsByName = this.filteredContactsByName();

    return (
      <>
        <Section>
          <Container>
            <Title>Phonebook</Title>
            <AddContactForm onSubmit={this.addContact} />
          </Container>
        </Section>

        <Section>
          <Container>
            <Title>Contacts</Title>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={filteredContactsByName}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        </Section>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}
