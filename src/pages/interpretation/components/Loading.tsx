import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import BigGhost from "../../../shared/assets/images/big_ghost.png";

const Loading = () => {
  return (
    <>
      <Wrapper>
        <Img src={BigGhost} />
        <Text style={{ marginBottom: "13px" }}>너의 해몽이 궁금해?</Text>
        <Text>내가 알려줄게!</Text>
        <Text style={{ marginBottom: "35px" }}>조금만 기다려줘 :)</Text>
        <BeatLoader
          color={"#B6B6B6"}
          speedMultiplier={0.5}
          size={10}
          // loading={loading}
        />
      </Wrapper>
    </>
  );
};

export default Loading;

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
`;
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
