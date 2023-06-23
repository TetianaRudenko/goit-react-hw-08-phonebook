import { useAuth } from "hooks"
import { Nav, StyledLink } from "./Navigation.styled"
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <div> 
      <StyledLink to="/">
        Home
      </StyledLink>
      </div>
        
      
      {isLoggedIn ? (
        <>
          <StyledLink to="/contacts">
            Phonebook
          </StyledLink> 
          <UserMenu/>
        </>
      ) : (
        <AuthNav />
      )}
    </Nav>
  )
}