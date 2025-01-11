import styled from "styled-components";
const SliderItem = () => {
  return (
    <SliderItemWrapper>
      <Title>Slider Item</Title>
      <Content>
        구름 위에서 칼국수를 만드는 꿈을 꿨다. 구름을 밀가루처럼 반죽해 칼로
        썰었더니 진짜 면발이 되었다. 국물은 무지개에서 짜내고, 별똥별을 다듬어
        고명을 올렸다. 그런데 갑자기 구름이 녹아내리면서 아래로 떨어졌고,
        바닥에는 거대한 수저를 든 고래가 기다리고 있었다. 고래는 "너의 칼국수는
        합격이다"라며 나를 삼키더니 갑자기 경적 소리가 들렸다. 눈을 떠보니 알람
        시계가 울리고 있었다. 와, 이게 무슨 꿈이야?
      </Content>
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
  margin: 20px 25px;
`;

export default SliderItem;
