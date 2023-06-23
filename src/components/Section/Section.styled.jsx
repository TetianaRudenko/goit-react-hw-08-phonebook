import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${props => props.theme.spacing(10)}; 
  
`

const Title = styled.h2`
  font-size: ${props => props.theme.spacing(10)};
  margin-bottom: ${props => props.theme.spacing(5)};
`

export { Wrap, Title }