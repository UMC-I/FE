import MongChiveIcon from "@shared/images/mongchive.svg?react";
import styled from "styled-components";

const SmallIconText = () => {
  return (
    <Container>
      <MongChiveIcon />
      <Text>나의 꿈 저장소</Text>
    </Container>
  );
};

export default SmallIconText;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Text = styled.p`
  color: #6276d9;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
`;
