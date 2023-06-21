import { Helmet } from "react-helmet";
import { LoginForm } from "components/LoginForm/LoginForm";
import { Section } from "components/Section/Section";

const Login = () => (
  <Section>
    <Helmet> 
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </Section>
);

export default Login;