import styled from "styled-components";
import Rank from "@shared/ui/Rank";
import { useNavigate } from "react-router-dom";
//import { DreamListData } from "@shared/mocks/DreamListData";
import { useQuery } from "@tanstack/react-query";
import { GetRanking } from "@shared/apis/dreamAPI";
import { TRank } from "@shared/types/dreamType";

const Ranking = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/posts/${id}`);
  };
  const {
    data: Ranks,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetRanking(),
    queryKey: ["Ranks"],
  });

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }
  console.log(Ranks);
  return (
    <Container>
      <Title>레전드 꿈수저들</Title>
      <RankList>
        {Ranks?.success.success.map((dream: TRank, index: number) => (
          <Rank
            key={dream.postId}
            rank={index + 1}
            title={dream.title}
            onClick={() => handleClick(dream.postId)}
            likedCount={dream.likes}
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
