//import { Helmet } from "react-helmet";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";
import { useDispatch,  } from "react-redux";
//import { selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { Section } from "components/Section/Section";

const Phonebook = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Phonebook">
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </Section>
  )
};

export default Phonebook;