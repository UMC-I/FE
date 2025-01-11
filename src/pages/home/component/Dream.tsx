import styled from "styled-components";
import DreamIcon from "../../../shared/images/dream.svg?react";
import { useNavigate } from "react-router-dom";

const Dream = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <DreamIcon />
    </Container>
  );
};

export default Dream;

const Container = styled.div``;
