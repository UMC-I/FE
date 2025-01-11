import { PatchLikeUp } from "@shared/apis/dreamAPI";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
interface SliderItemProps {
  dream: {
    postId: number;
    title: string;
    content: string;
  };
  category: string;
}
const SliderItem = ({ dream, category }: SliderItemProps) => {
  const [active, setActive] = useState(false);

  console.log("dream", dream);

  // useMutation으로 API 요청 처리
  const mutation = useMutation({
    mutationFn: () => PatchLikeUp(dream.postId, active),
    onSuccess: () => {
      // 성공 시 상태 업데이트
      setActive((prev) => !prev);
    },
    onError: (error) => {
      console.log("좋아요 API 실패:", error);
    },
  });

  const handleOnClick = () => {
    mutation.mutate();
  };
  return (
    <SliderItemWrapper>
      <Title>{dream.title}</Title>
      <Content>{dream.content}</Content>
      <AgreeButton active={active} onClick={handleOnClick} category={category}>
        {category === "공포" && (
          <>
            <Emoji>😱</Emoji>다리가 후덜덜...
          </>
        )}
        {category === "개꿈" && (
          <>
            <Emoji>😮</Emoji>와 진짜 개꿈이네요!
          </>
        )}
        {category === "일상" && (
          <>
            <Emoji>🤩</Emoji>영화 한 편 뚝딱!
          </>
        )}
      </AgreeButton>
    </SliderItemWrapper>
  );
};

const SliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Content = styled.div`
  font-size: 14px;
  margin: 20px 26px;
  line-height: 24px;
  height: 240px;
`;

const AgreeButton = styled.button<{ active: boolean; category: string }>`
  width: 155px;
  height: 40px;
  border: 0.5px solid #b2b2b2;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 17px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? "#E8EBFA" : "#fff")};
  box-shadow: ${(props) =>
    props.active
      ? "inset 0px 2px 4px rgba(0, 0, 0, 0.2)"
      : "inset 0px 0px 2px rgba(0, 0, 0, 0.2)"};
`;

const Emoji = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
export default SliderItem;
