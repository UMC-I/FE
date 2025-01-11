import styled from "styled-components";
import Banner_1 from "../../../shared/images/Property 1=1.png";
const Banner = () => {
  return (
    <Container>
      <img src={Banner_1} />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 333px;
  height: 189px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #b6b6b6;
`;
