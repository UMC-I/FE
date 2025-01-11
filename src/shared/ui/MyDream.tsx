import styled from "styled-components";
import DogIcon from "@shared/images/dog.svg?react";
import FortuneIcon from "@shared/images/fortune.svg?react";
import HorrorIcon from "@shared/images/Horror.svg?react";
import SmallButton from "./SmallButton";
import { PatchSecret } from "@shared/apis/dreamAPI";
import { useState } from "react";

interface IMyDreamPost {
  id: number;
  category: string;
  title: string;
  open: boolean;
  onClick: () => void;
}

const MyDream = ({ id, category, title, open, onClick }: IMyDreamPost) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClick = async () => {
    try {
      const newOpenState = !isOpen;
      const response = await PatchSecret(id, newOpenState);
      setIsOpen(newOpenState);
      return response.data;
    } catch (error) {
      console.log("공개 여부 수정 실패 : ", error);
    }
  };

  return (
    <Container onClick={onClick}>
      {category === "개꿈" && <DogIcon />}
      {category === "공포" && <HorrorIcon />}
      {category === "일상상" && <FortuneIcon />}
      <Title>{title}</Title>
      <SmallButton text="공개" onClick={handleClick} active={open} />
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
