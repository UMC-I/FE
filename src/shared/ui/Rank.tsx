import styled from "styled-components";
import HeartIcon from "../images/heart.svg?react";
import OneIcon from "../images/ep_medal.svg?react";
import TwoIcon from "../images/ep_medal_2.svg?react";
import ThreeIcon from "../images/ep_medal_3.svg?react";
import { useRankContext } from "../../context/RankContext";

interface IRankProps {
  rank: number;
  title: string;
  onClick: () => void;
  likedCount: number;
}

const Rank = ({ rank, title, onClick, likedCount }: IRankProps) => {
  const { setIsRank } = useRankContext();
  const handleClick = () => {
    setIsRank(rank);
    onClick();
  };

  return (
    <Container onClick={handleClick}>
      {rank === 1 && <OneIcon />}
      {rank === 2 && <TwoIcon />}
      {rank === 3 && <ThreeIcon />}
      <Title>{title}</Title>
      <Flex>
        <HeartIcon />
        <Like>{likedCount}</Like>
      </Flex>
    </Container>
  );
};

export default Rank;

const Container = styled.div`
  width: 333px;
  height: 55px;
  border-radius: 10px;
  border: 0.5px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 0.5px 2px 0px #b6b6b6 inset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
`;

const Title = styled.p`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  flex: 1;
`;

const Like = styled.p`
  width: 22px;
  height: 20px;
  color: #ff4d4d;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Flex = styled.div`
  display: flex;
  gap: 5px;
`;
