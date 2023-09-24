import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

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

  checkContactName = values => {
    const normalizedName = values.name
      .split(' ')
      .filter(el => el)
      .join(' ');
    const isNameInPhonebook = this.state.contacts.find(
      ({ name }) => name === normalizedName
    );
    return isNameInPhonebook;
  };

  handleSubmit = values => {
    if (this.checkContactName(values))
      return alert(`${values.name} already is in the PhoneBook`);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...values }],
    }));
  };

  handleChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  deleteContact = ({ target }) => {
    const updatedContacts = this.state.contacts.filter(
      ({ id }) => id !== target.value
    );
    this.setState({ contacts: updatedContacts });
  };

  getFilteredContacts = () => {
    const normalizedValue = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedValue)
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onChange={this.deleteContact}
        />
      </>
    );
  }
}
