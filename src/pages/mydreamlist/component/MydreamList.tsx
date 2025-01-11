import styled from "styled-components";
import { useGetInfiniteDreams } from "@shared/apis/useInfinite";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TMyDream } from "@shared/types/dreamType";
import MyDream from "@shared/ui/MyDream";

const MyDreamList = () => {
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
          return <MyDream key={dream.id} {...dream} />;
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
