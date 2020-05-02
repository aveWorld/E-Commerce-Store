import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
barder-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all .5s easy-in-out;
&:hover {
   background: var(--lightBlue);
   color: var(--mainBlue);
} 
&:focus {
  outline: none;
} 
`