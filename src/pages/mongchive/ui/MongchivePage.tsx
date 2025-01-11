import styled from "styled-components";
import SmallIconText from "../component/IconText";
import MyDream from "@shared/ui/MyDream";

export const MongchivePage = () => {
  return (
    <Container>
      <SmallIconText />
      <MyDream />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
