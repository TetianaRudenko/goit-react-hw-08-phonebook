import { Navigation } from "components/Navigation/Navigation"
import { Header } from "./AppBar.styled"
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav"
import { useAuth } from "hooks";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  )
}