export const ContactForm = ({ addContact }) => {
  return (
    <form action="" onSubmit={addContact}>
      <legend>Phonebook</legend>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button>Add contact</button>
    </form>
  );
};
