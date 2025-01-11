import { createContext, useState, useContext, PropsWithChildren } from "react";

type TRankContext = {
  isRank: number | null;
  setIsRank: (rank: number | null) => void;
};

const RankContext = createContext<TRankContext | null>(null);

export const RankProvider = ({ children }: PropsWithChildren) => {
  const [isRank, setIsRank] = useState<number | null>(null);
  console.log(isRank);
  return (
    <RankContext.Provider
      value={{
        isRank,
        setIsRank,
      }}
    >
      {children}
    </RankContext.Provider>
  );
};

export function useRankContext() {
  const context = useContext(RankContext);
  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
