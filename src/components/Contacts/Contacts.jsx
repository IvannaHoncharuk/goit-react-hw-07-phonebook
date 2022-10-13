import { ContactsItem } from './ContactItem/ContactItem';
import { Contacts } from './Contacts.styled';
import { useSelector } from 'react-redux';
import {selectContactsFilter} from '../../redux/slice';
import { useGetContactsQuery } from 'services/api';

export const ContactsList = () => {
  const { data: contacts} = useGetContactsQuery();
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <Contacts>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            id={id}
          />
        ))
      ) : (
        <li>No contacts</li>
      )}
    </Contacts>
  );
};

