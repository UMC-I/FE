import styled from "styled-components";

interface IButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const SmallButton = ({ text, active, onClick }: IButtonProps) => {
  const color = active ? "#61646B" : "#B6B6B6";
  return (
    <ButtonWrapper onClick={onClick} color={color}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ color: string }>`
  width: 55px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
`;

export default SmallButton;
