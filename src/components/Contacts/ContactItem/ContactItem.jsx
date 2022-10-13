import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';
import { useDeleteContactByIdMutation } from 'services/api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const ContactsItem = ({ id, name, number }) => {
    const [deleteContact, { isSuccess, isLoading, isError }] =
    useDeleteContactByIdMutation();
  
    useEffect(() => {
    if (isSuccess) {
      toast.success('Contact deleted');
    }

    if (isError) {
      toast.error('Oops!! Something went wrong!');
    }
  }, [isSuccess, isError]);

  return (
    <Contact>
      {name}: {number}{' '}
      <button type="button" onClick={() => deleteContact(id)} disabled={isLoading}>
        Delete
      </button>
    </Contact>
  );
};

ContactsItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};