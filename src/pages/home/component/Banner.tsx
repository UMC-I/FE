import styled from "styled-components";
import Banner_1 from "../../../shared/images/Property 1=1.png";
import Banner_2 from "../../../shared/images/Property 1=2.png";
import Banner_3 from "../../../shared/images/Property 1=3.png";
import Banner_4 from "../../../shared/images/Property 1=4.png";
import Banner_5 from "../../../shared/images/Property 1=5.png";
import { useState, useEffect } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [Banner_1, Banner_2, Banner_3, Banner_4, Banner_5];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // 5초마다 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트가 unmount 될 때 interval 해제
  }, []);

  return (
    <Container>
      <Slider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <img key={index} src={banner} alt={`banner ${index + 1}`} />
        ))}
      </Slider>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 333px;
  height: 189px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
`;
const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
