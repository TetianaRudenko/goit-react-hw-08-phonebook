import { Navigation } from "components/Header/Navigation/Navigation"
import { Header } from "./AppBar.styled"
//import { AuthNav } from "components/Header/AuthNav/AuthNav"
//import { UserMenu } from "../UserMenu/UserMenu";
//import { useAuth } from "hooks";

export const AppBar = () => {
  //const { isLoggedIn } = useAuth();
  
  return (
    <Header>
      <Navigation />
    </Header>
  )
}