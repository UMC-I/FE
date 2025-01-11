import styled from "styled-components";
import { Icon } from "@iconify/react";

function Login() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };
  return (
    <Container>
      <div>몽땅</div>
      <Short>니꿈내꿈</Short>
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
  color: #e4e4e4;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Line = styled.div`
  width: 120px;
  height: 1px;
  flex-shrink: 0;
  background-color: #e4e4e4;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6276d9;
  padding-top: 277.89px;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 46px;
  padding-right: 47px;
`;

const Short = styled.div`
  margin-top: 13px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 277px;
`;

export default Login;
