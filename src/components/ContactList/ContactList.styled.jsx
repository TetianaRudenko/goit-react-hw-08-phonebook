import styled from "styled-components";

const List = styled.ul`
  padding:  ${props => props.theme.spacing(2)}; 
`

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(3)}; 
  }
`

export { List, Item };