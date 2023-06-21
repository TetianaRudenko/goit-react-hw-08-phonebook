import { Helmet } from "react-helmet";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";

const Phonebook = () => {
  return (
    <section>
      <Helmet>
        <title>Personal phonebook</title>
      </Helmet>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </section>
  )
};

export default Phonebook;