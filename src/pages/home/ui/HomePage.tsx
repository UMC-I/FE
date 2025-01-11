import styled from "styled-components";
import Banner from "../component/Banner";
import Ranking from "../component/Ranking";
import Dream from "../component/Dream";
import Logo from "../component/Logo";

export const HomePage = () => {
  return (
    <Container>
      <Logo />
      <Banner />
      <Ranking />
      <Dream />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 23px;
`;
