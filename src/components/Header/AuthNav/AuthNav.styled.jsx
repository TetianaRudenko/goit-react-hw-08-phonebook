import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.secondaryColor};

  :active {
    color: ${props => props.theme.colors.white};
  }
`