import { useState } from "react";
import styled from "styled-components";
const SliderItem = () => {
  const [active, setActive] = useState(false);
  const handleOnClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <SliderItemWrapper>
      <Title>구름 속 칼국수</Title>
      <Content>
        구름 위에서 칼국수를 만드는 꿈을 꿨다. 구름을 밀가루처럼 반죽해 칼로
        썰었더니 진짜 면발이 되었다. 국물은 무지개에서 짜내고, 별똥별을 다듬어
        고명을 올렸다. 그런데 갑자기 구름이 녹아내리면서 아래로 떨어졌고,
        바닥에는 거대한 수저를 든 고래가 기다리고 있었다. 고래는 "너의 칼국수는
        합격이다"라며 나를 삼키더니 갑자기 경적 소리가 들렸다. 눈을 떠보니 알람
        시계가 울리고 있었다. 와, 이게 무슨 꿈이야?
      </Content>
      <AgreeButton active={active} onClick={handleOnClick}>
        <Emoji>😮</Emoji>와 진짜 개꿈이네요!
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

const AgreeButton = styled.button<{ active: boolean }>`
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
