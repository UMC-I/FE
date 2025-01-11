import styled from "styled-components";
import Rank from "@shared/ui/Rank";
import { useNavigate } from "react-router-dom";
import { DreamListData } from "@shared/mocks/DreamListData";

const Ranking = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/list/${id}`);
  };
  return (
    <Container>
      <Title>레전드 꿈수저들</Title>
      <RankList>
        {DreamListData.map((dream) => (
          <Rank
            key={dream.id}
            rank={dream.rank}
            title={dream.title}
            onClick={() => handleClick(1)}
            likedCount={dream.likeCount}
          />
        ))}
      </RankList>
    </Container>
  );
};

export default Ranking;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RankList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
