import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(5)};
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.spacing(6)};
  line-height: 1.71;
  color: ${props => props.theme.colors.secondaryColor};
`

export const Input = styled.input`
  width: 280px;
  height: ${props => props.theme.spacing(10)};
  padding:${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(2)};
  border: ${props => `1px solid ${props.theme.colors.secondaryColor}`};

  color: ${props => props.theme.colors.secondaryColor};
  font-size:${props => props.theme.spacing(4)};
  outline: 0;

  &:focus {
    border: ${props => `2px solid ${props.theme.colors.secondaryColor}`};
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

export const Button = styled.button`
  display: inline;
  width: 280px;
  height: ${props => props.theme.spacing(10)};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(2)};
  background: linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140));
  border: ${props => `1px solid ${props.theme.colors.primaryColor}`};

  color: ${props => props.theme.colors.secondaryColor};

  cursor: pointer;
  font-size: ${props => props.theme.spacing(5)};

  &:hover,
  &:focus {
    border: ${props => `2px solid ${props.theme.colors.secondaryColor}`}; 
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

