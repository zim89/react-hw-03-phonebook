import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

export default class ContactList extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className="contactList">
        {contacts.length
          ? contacts.map(({ id, name, number }) => (
              <li className="contactList__item" key={id}>
                <div>
                  {name}: <span className="contactList__number">{number}</span>
                </div>
                <button
                  className="contactList__btn"
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            ))
          : null}
      </ul>
    );
  }
}
