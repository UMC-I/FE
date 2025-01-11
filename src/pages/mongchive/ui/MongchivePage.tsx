import CardSlider from "../components/CardSlider";

import styled from "styled-components";
import ghost from "../../../shared/assets/images/ghost.png";
import dog from "../../../shared/assets/images/dog.png";
import clover from "../../../shared/assets/images/clover.png";
import { useState } from "react";

export const MongchivePage = () => {
  const [category, setCategory] = useState<string>("일상");

  const handleClick = (name: string) => {
    setCategory(name);
  };

  return (
    <Container>
      <Options>
        <Option
          isSelected={category === "공포"}
          onClick={() => handleClick("공포")}
        >
          <img src={ghost} />
          <Name>공포</Name>
        </Option>
        <Option
          isSelected={category === "개꿈"}
          onClick={() => handleClick("개꿈")}
        >
          <img src={dog} />
          <Name>개꿈</Name>
        </Option>
        <Option
          isSelected={category === "일상"}
          onClick={() => handleClick("일상")}
        >
          <img src={clover} />
          <Name>일상</Name>
        </Option>
      </Options>
      <CardSlider category={category} />
    </Container>
  );
};

const Name = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Option = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  width: 95px;
  height: 95px;
  flex-shrink: 0;
  border-radius: 10px;
  border: ${(props) =>
    props.isSelected ? "0.5px solid #B6B6B6" : "0.5px solid #b2b2b2"};
  background: ${(props) => (props.isSelected ? "#E8EBFA" : "#FFF")};
  box-shadow: 0px 0.5px 2px 0px rgba(97, 100, 107, 0.5) inset;
`;

const Options = styled.div`
  display: flex;
  column-gap: 24px;
`;

const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 69px;
  padding-bottom: 23px;
  width: 100%;
  height: auto;
`;
