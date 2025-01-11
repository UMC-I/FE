import styled from "styled-components";

const Logo = () => {
  return (
    <Title>
      <Span>몽</Span>땅
    </Title>
  );
};

export default Logo;

const Title = styled.p`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 75% */
  margin-top: 50px;
`;
const Span = styled.span`
  color: #6276d9;
`;
