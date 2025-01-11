import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 Swiper 스타일
import "swiper/css/effect-cards"; // EffectCards 스타일
import { EffectCards } from "swiper/modules";
import styled from "styled-components";
import SliderItem from "./SliderItem";
import { useQuery } from "@tanstack/react-query";
import { GetDreamList } from "@shared/apis/dreamAPI";

// Swiper 스타일
const StyledSwiper = styled(Swiper)`
  margin-top: 30px;
  width: 100%;
  height: 528px; /* 슬라이드 높이 */
  background-color: #fff;
  border-radius: 10px; /* 슬라이드 테두리 둥글게 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 */
`;

// SwiperSlide 스타일
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  // align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 */
  transition: transform 0.3s ease; /* 애니메이션 효과 */
  font-size: 20px; /* 글자 크기 */

  /* 이전 슬라이드 */
  &.swiper-slide-prev {
    background-color: #fdfdfd; /* 아주 살짝 어두운 흰색 */
  }

  /* 그 뒤의 카드들 */
  &.swiper-slide-next {
    background-color: #fdfdfd; /* 아주 살짝 어두운 흰색 */
  }
`;

export default function CardSlider({ category }: { category: string }) {
  const {
    data: dreams,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => GetDreamList(category),
    queryKey: ["category", category],
  });

  // 데이터가 로딩 중일 때와 오류가 있을 때 처리
  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중 화면
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>; // 에러 화면
  }

  return (
    <>
      <StyledSwiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]} // EffectCards 모듈 사용
        className="mySwiper"
        cardsEffect={{
          slideShadows: false, // 카드에 그림자 추가
        }}
      >
        {dreams["success"]["success"]?.map(
          (dream: { id: number; title: string; content: string }) => (
            <StyledSwiperSlide key={dream.id}>
              <SliderItem dream={dream} category={category} />
            </StyledSwiperSlide>
          )
        )}
      </StyledSwiper>
    </>
  );
}
