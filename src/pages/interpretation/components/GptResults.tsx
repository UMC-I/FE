import styled from "styled-components";

const GptResults = ({ result }: { result: string }) => {
  return (
    <>
      <Text style={{ marginBottom: "13px" }}>이제 결과를 확인해봐!</Text>
      <ResultWrapper>{result}</ResultWrapper>
    </>
  );
};

export default GptResults;

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border: 1px solid #b6b6b6;
  border-radius: 10px;
  font-size: 16px;
  width: 333px;
  height: 197px;
  padding: 20px;
  line-height: 24px;
  font-weight: 500;
`;
