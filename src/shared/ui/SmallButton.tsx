import styled from "styled-components";

interface IButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const SmallButton = ({ text, active, onClick }: IButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} active={active}>
      {text}
    </ButtonWrapper>
  );
};

export default SmallButton;

interface ButtonWrapperProps {
  active: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background: none;
  border: none;
  color: ${({ active }) => (active ? "#61646B" : "#B6B6B6")};
  cursor: pointer;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    color: ${({ active }) => (active ? "#50545A" : "#A6A6A6")};
  }
`;
