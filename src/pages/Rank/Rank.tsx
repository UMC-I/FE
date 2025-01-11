import styled from "styled-components";
import left from "../../shared/assets/icon/left.png";
import Button from "@shared/ui/Button";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GetDreamDetail } from "@shared/apis/dreamAPI";

function Rank() {
  const navigate = useNavigate();
  const { id } = useParams();

  const postId = Number(id);
  console.log("id값:", postId);

  const handleClick = () => {
    //해몽 페이지 이동 변경
    navigate("/");
  };

  const {
    data: rankDetail,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => GetDreamDetail(postId),
    queryKey: ["rankDetail", postId],
  });

  // 데이터가 로딩 중일 때와 오류가 있을 때 처리
  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중 화면
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>; // 에러 화면
  }

  return (
    <Container>
      <img src={left} />
      <SliderItemWrapper>
        <Title>{rankDetail.success.title}</Title>
        <Content>{rankDetail.success.content}</Content>
        <AgreeButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.06884 2.25849C2.52558 2.96361 1.39535 4.64175 1.39535 6.64268C1.39535 8.6864 2.23256 10.2622 3.4307 11.6129C4.41954 12.7255 5.61581 13.6483 6.78233 14.5469C7.06016 14.7608 7.33457 14.9741 7.60558 15.1869C8.09488 15.5729 8.53116 15.9106 8.95256 16.1571C9.37395 16.4036 9.71163 16.5152 10 16.5152C10.2884 16.5152 10.627 16.4036 11.0474 16.1571C11.4688 15.9106 11.9051 15.5729 12.3944 15.1869C12.6654 14.9735 12.9398 14.7605 13.2177 14.5478C13.2229 14.5437 13.2282 14.5397 13.2334 14.5356C14.3949 13.639 15.5849 12.7205 16.5693 11.6129C17.7684 10.2622 18.6047 8.6864 18.6047 6.64268C18.6047 4.64268 17.4744 2.96361 15.9312 2.25849C14.4316 1.57291 12.4167 1.7543 10.5023 3.74407C10.4372 3.81159 10.3592 3.8653 10.2729 3.90199C10.1866 3.93867 10.0938 3.95758 10 3.95758C9.90622 3.95758 9.8134 3.93867 9.72709 3.90199C9.64078 3.8653 9.56276 3.81159 9.49767 3.74407C7.58326 1.7543 5.56837 1.57291 4.06884 2.25849ZM10 2.29198C7.8493 0.366398 5.44093 0.0966304 3.48837 0.988723C1.42884 1.93291 0 4.12082 0 6.64361C0 9.12268 1.03256 11.0148 2.38791 12.5404C3.47256 13.7617 4.8 14.7841 5.97302 15.6864C6.23969 15.891 6.49581 16.0901 6.7414 16.2836C7.2186 16.6594 7.73023 17.0594 8.24837 17.3627C8.76651 17.6659 9.35814 17.9115 10 17.9115C10.6419 17.9115 11.2335 17.665 11.7516 17.3627C12.2707 17.0594 12.7814 16.6594 13.2586 16.2836C13.5042 16.0901 13.7603 15.891 14.027 15.6864C15.1991 14.7841 16.5274 13.7608 17.6121 12.5404C18.9674 11.0148 20 9.12268 20 6.64361C20 4.12082 18.5721 1.93291 16.5116 0.990584C14.5591 0.0975606 12.1507 0.367328 10 2.29198Z"
              fill="#FF4D4D"
              fill-opacity="0.85"
            />
            <path
              d="M4.06884 2.25849C2.52558 2.96361 1.39535 4.64175 1.39535 6.64268C1.39535 8.6864 2.23256 10.2622 3.4307 11.6129C4.41954 12.7255 5.61581 13.6483 6.78233 14.5469C7.06016 14.7608 7.33457 14.9741 7.60558 15.1869C8.09488 15.5729 8.53116 15.9106 8.95256 16.1571C9.37395 16.4036 9.71163 16.5152 10 16.5152C10.2884 16.5152 10.627 16.4036 11.0474 16.1571C11.4688 15.9106 11.9051 15.5729 12.3944 15.1869C12.6654 14.9735 12.9398 14.7605 13.2177 14.5478L13.2334 14.5356C14.3949 13.639 15.5849 12.7205 16.5693 11.6129C17.7684 10.2622 18.6047 8.6864 18.6047 6.64268C18.6047 4.64268 17.4744 2.96361 15.9312 2.25849C14.4316 1.57291 12.4167 1.7543 10.5023 3.74407C10.4372 3.81159 10.3592 3.8653 10.2729 3.90199C10.1866 3.93867 10.0938 3.95758 10 3.95758C9.90622 3.95758 9.8134 3.93867 9.72709 3.90199C9.64078 3.8653 9.56276 3.81159 9.49767 3.74407C7.58326 1.7543 5.56837 1.57291 4.06884 2.25849Z"
              fill="#FF4D4D"
              fill-opacity="0.85"
            />
          </svg>
          <Like>123</Like>
        </AgreeButton>
      </SliderItemWrapper>
      <Button onClick={handleClick}>꿈의 해석이 궁금하신가요?</Button>
    </Container>
  );
}

const Like = styled.div`
  color: rgba(255, 77, 77, 0.85);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-left: 7px;
  transform: translateY(1px);
`;

const AgreeButton = styled.button`
  width: 80px;
  height: 40px;
  border: 0.5px solid #b2b2b2;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: nset 0px 0px 2px rgba(0, 0, 0, 0.2);
`;

const SliderItemWrapper = styled.div`
  width: 333px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 1px 2px 5px 0px #b6b6b6 inset;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  margin-top: 98.74px;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 47px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 9px;
`;

const Content = styled.div`
  font-size: 14px;
  margin: 11px 26px;
  line-height: 24px;
  height: 240px;
  color: #000;
`;

const Container = styled.div`
  padding-top: 66px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: auto;
`;

export default Rank;
