import styled from "styled-components";
import BigGhost from "../../../shared/assets/images/big_ghost.png";
import GptResults from "../components/GptResults";
import { useMutation } from "@tanstack/react-query";
import { PostDreamMeaning } from "@shared/apis/dreamAPI";
import { useEffect } from "react";
import Loading from "../components/Loading";
import left from "../../../shared/assets/icon/left.png";
import { useNavigate } from "react-router";

const InterpretationPage = () => {
  const navigate = useNavigate();
  // Mutation 정의
  const mutation = useMutation({
    mutationFn: () => PostDreamMeaning(2),
    onSuccess: (data) => {
      console.log("해몽 API 성공:", data);
    },
    onError: (error) => {
      console.log("해몽 API 실패:", error);
    },
  });

  // 컴포넌트가 처음 마운트될 때 mutation 호출
  useEffect(() => {
    mutation.mutate();
  }, []);

  if (mutation.status === "pending") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <BackImg src={left} onClick={() => navigate("/mydreams")} />
      <Img src={BigGhost} />
      <GptResults result={mutation.data?.content} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Img = styled.img<{ src: string }>`
  width: 350px;
  height: 350px;
`;
const BackImg = styled.img`
  position: absolute;
  top: 66px;
  left: 30px;
  cursor: pointer;
`;

export default InterpretationPage;
