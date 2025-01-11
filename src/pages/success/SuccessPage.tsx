import styled from "styled-components";
import IconText from "./component/IconText";
import Button from "@shared/ui/Button";
import { useNavigate } from "react-router";
import SmallText from "./component/Text";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <IconText />
      <SmallText />
      <Button onClick={() => navigate("/")}>염탐하기</Button>
    </Container>
  );
};

export default SuccessPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100%;
`;
