import styled from "styled-components";

const SmallText = () => {
  return (
    <Container>
      <Text>이제 남의 꾸믈 훔쳐 볼 시간!</Text>
      <Text>나쁜 사람 같지만 재밌어 보이지 않나요?</Text>
    </Container>
  );
};

export default SmallText;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
