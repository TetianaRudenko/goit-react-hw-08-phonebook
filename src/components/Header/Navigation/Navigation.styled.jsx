import { NavLink } from "react-router-dom"; 
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color:  ${props => props.theme.colors.secondaryColor};

  :active{
     color: ${props => props.theme.colors.white};
  }
`