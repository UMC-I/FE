import SuccessIcon from "@shared/images/success.svg?react";
import styled from "styled-components";

const IconText = () => {
  return (
    <Container>
      <SuccessIcon />
      <Text>꿈 보관 완료</Text>
    </Container>
  );
};

export default IconText;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;
