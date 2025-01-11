import styled from "styled-components";
import Dream from "../../../shared/images/dream.svg?react";
import { useNavigate } from "react-router-dom";

const Dream = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <Dream />
    </Container>
  );
};

export default Dream;

const Container = styled.div``;
