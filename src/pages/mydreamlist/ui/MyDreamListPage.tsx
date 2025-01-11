import styled from "styled-components";
import SmallIconText from "../component/IconText";
import MyDreamList from "../component/MydreamList";

export const MyDreamListPage = () => {
  return (
    <Container>
      <SmallIconText />
      <MyDreamList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
