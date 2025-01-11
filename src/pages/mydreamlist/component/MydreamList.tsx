import styled from "styled-components";
import { useGetInfiniteDreams } from "@shared/apis/useInfinite";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TMyDream } from "@shared/types/dreamType";
import MyDream from "@shared/ui/MyDream";
import { useNavigate } from "react-router";

const MyDreamList = () => {
  const navigate = useNavigate();
  const {
    data: dreams,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteDreams();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <Container>
      {dreams?.pages?.map((page) => {
        return page?.results?.map((dream: TMyDream) => {
          return (
            <MyDream
              key={dream.id}
              {...dream}
              onClick={() => navigate(`/detail/:${dream.id}`)}
            />
          );
        });
      })}
      <div ref={ref}></div>
    </Container>
  );
};

export default MyDreamList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
