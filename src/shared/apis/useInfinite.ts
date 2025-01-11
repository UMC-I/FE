import { useInfiniteQuery } from "@tanstack/react-query";
import { GetMyDreamList } from "./dreamAPI";

export function useGetInfiniteDreams() {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => GetMyDreamList({ pageParam }),
    queryKey: ["myDreamList"],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.results[lastPage.results.length - 1];
      //const lastMovie = lastPage.at(-1);
      return lastMovie ? allPage?.length + 1 : undefined;
    },
  });
}
