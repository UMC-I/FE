import styled from "styled-components";
import DogIcon from "@shared/images/dog.svg?react";
import FortuneIcon from "@shared/images/fortune.svg?react";
import HorrorIcon from "@shared/images/Horror.svg?react";

interface IMyDreamPost {
  category: string;
  title: string;
  open: boolean;
}

const MyDream = ({ category, title, open }: IMyDreamPost) => {
  return (
    <Container>
      {category === "개꿈" && <DogIcon />}
      {category === "공포" && <HorrorIcon />}
      {category === "일상상" && <FortuneIcon />}
      <Title>{title}</Title>
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
