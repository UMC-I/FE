import styled from "styled-components";
import BigGhost from "../../../shared/assets/images/big_ghost.png";
import GptResults from "../components/GptResults";
import { useMutation } from "@tanstack/react-query";
import { PostDreamMeaning } from "@shared/apis/dreamAPI";
import { useEffect } from "react";
import Loading from "../components/Loading";

const InterpretationPage = () => {
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
      <Img src={BigGhost} />
      <GptResults result={mutation.data?.content} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img<{ src: string }>`
  margin-top: 80px;
  width: 350px;
  height: 350px;
`;

export default InterpretationPage;
