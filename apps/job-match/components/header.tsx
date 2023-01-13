import styled from "styled-components";
import { useRouter } from 'next/router'

const NavButton = styled.button`
  color:#0A0708;
  background-color:white;
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const HeaderContainer = styled.div`
  width:100%;
  background-color:white;
  box-shadow: 0 4px 8px 0 #B1B1B1;
`;


export const Header = () => {
  const router = useRouter();

  return <>
  <HeaderContainer>
    <NavButton onClick={()=> router.push("home")}>Home</NavButton>
    <NavButton onClick={()=> router.push("login")}>Log In</NavButton>
  </HeaderContainer>
  </>
 }

