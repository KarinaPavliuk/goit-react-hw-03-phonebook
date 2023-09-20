export const ContactList = ({ filteredContacts, onDeleteClick }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          {onDeleteClick && (
            <button type="button" onClick={() => onDeleteClick(contact.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
