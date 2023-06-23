import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Text = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.secondaryColor};
`

export const Button = styled.button`
  padding: ${props => props.theme.spacing(2)};
  font-weight:700;
  background-color: transparent;
  color: ${props => props.theme.colors.secondaryColor};
  border: none;
  cursor: pointer;
  

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    //border: ${props => `2px solid ${props.theme.colors.secondaryColor}`}; 
    //box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`
