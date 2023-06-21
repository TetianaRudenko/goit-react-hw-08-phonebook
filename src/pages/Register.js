import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Section } from "components/Section/Section";
import { Helmet } from "react-helmet";

const Register = () => (
  <> 
  <Helmet>
      <title> Registration </title>
    </Helmet>
      <Section>
    <RegisterForm />
  </Section>
  </>
);

export default Register;
