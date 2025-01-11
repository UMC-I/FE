import styled from "styled-components";
import Rank from "@shared/ui/Rank";
import { useNavigate } from "react-router-dom";

const Ranking = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/list/${id}`);
  };
  return (
    <Container>
      <RankList>
        <Rank
          rank={1}
          title="제목1"
          onClick={() => handleClick(1)}
          likedCount={100}
        />
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
