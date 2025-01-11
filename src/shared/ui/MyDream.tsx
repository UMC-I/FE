import styled from "styled-components";
import DogIcon from "@shared/images/dog.svg?react";
import FortuneIcon from "@shared/images/fortune.svg?react";
import HorrorIcon from "@shared/images/Horror.svg?react";
import SmallButton from "./SmallButton";
import { PatchSecret } from "@shared/apis/dreamAPI";

interface IMyDreamPost {
  id: number;
  category: string;
  title: string;
  open: boolean;
}
const handleClick = async (id: number, open: boolean) => {
  try {
    const response = await PatchSecret(id, open);
    return response.data;
  } catch (error) {
    console.log("공개 여부 수정 실패 : ", error);
  }
};

const MyDream = ({ id, category, title, open }: IMyDreamPost) => {
  return (
    <Container>
      {category === "개꿈" && <DogIcon />}
      {category === "공포" && <HorrorIcon />}
      {category === "일상상" && <FortuneIcon />}
      <Title>{title}</Title>
      <SmallButton
        text="공개"
        onClick={() => handleClick(id, open)}
        active={open}
      />
    </Container>
  );
};

export default MyDream;

const Container = styled.div`
  width: 333px;
  height: 55px;
  border-radius: 10px;
  border: 0.5px solid #61646b;
  background: #fff;
  box-shadow: 1px 2px 5px 0px rgba(182, 182, 182, 0.25) inset;
`;
const Title = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  flex: 1;
`;
