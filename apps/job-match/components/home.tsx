import styled from "styled-components";

const Title = styled.h1`
  color:#0A0708;
  background-color:white;
  font-size: 7.5rem;
`;

const SubTitle = styled.h2`
  color:#444444;
  background-color:white;
  font-size: 3.7rem;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  text-align: right;
  align-items: flex-end;
  `;

const Container = styled.div`
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width:70vh;
  height: 70vh;
  display: flex;
  padding: 1.5rem;
  background-color:white;
  box-shadow: 0 4px 8px 0 #B1B1B1;
`;


export const HomePage = () => {

  return <>
  <Container>
    <TitleWrapper>
      <div>
        <Title> We are Jobber</Title>
      </div>
      <SubTitleWrapper>
        <SubTitle>here you can find your soul job</SubTitle>
      </SubTitleWrapper>
    </TitleWrapper>
  </Container>
  </>
 }
