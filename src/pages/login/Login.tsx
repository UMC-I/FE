import styled from "styled-components";
import { Icon } from "@iconify/react";

function Login() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  // const link = `https://kauth.kakao.com/oauth/authorize?client_id=99d88dd5b6ebeb003f27d2f3819c86d8&redirect_uri=http://umc.mongddang.p-e.kr:3000/oauth2/callback/kakao&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };
  return (
    <Container>
      <Logo>
        <Text color={"#6276D9"}>몽</Text>
        <Text color={"black"}>땅</Text>
      </Logo>
      <Short>니꿈내꿈 夢땅 모여라 !</Short>
      <Box>
        <Line />
        <LoginText>간편 로그인</LoginText>
        <Line />
      </Box>
      <LoginButtons onClick={loginHandler}>
        <Icon
          icon="raphael:bubble"
          style={{
            width: "38.85px",
            height: "17.59px",
            color: "black",
            marginRight: "-2.79px",
          }}
        />
        카카오톡으로 로그인하기
      </LoginButtons>
    </Container>
  );
}
const Text = styled.div<{ color: string }>`
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.color};
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
`;
const LoginButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 45px;
  border-radius: 6px;
  border: 0;
  font-size: 14.5px;
  font-style: normal;
  font-weight: 400;
  background-color: #fee500;
  color: black;
  margin-bottom: 110;
`;

const Box = styled.div`
  display: flex;
  column-gap: 7px;
  align-items: center;
  margin-bottom: 7px;
`;

const LoginText = styled.div`
  color: #6276d9;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Line = styled.div`
  width: 118px;
  height: 1px;
  flex-shrink: 0;
  background-color: #6276d9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8ebfa;
  padding-top: 277.89px;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 46px;
  padding-right: 47px;
`;

const Short = styled.div`
  margin-top: 5px;
  color: #6276d9;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 277px;
`;

export default Login;
