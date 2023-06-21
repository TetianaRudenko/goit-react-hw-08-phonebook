import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Section } from "components/Section/Section";
import { Helmet } from "react-helmet";

const Register = () => (
  
  <Section>
    <Helmet>
      <title> Registration </title>
    </Helmet>
    <RegisterForm />
  </Section>

);

export default Register;
