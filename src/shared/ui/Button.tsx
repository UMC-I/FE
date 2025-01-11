import styled from "styled-components";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  onClick,
  ...props
}: PropsWithChildren<IButtonProps>) => {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  width: 334px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #6276d9;
  background: #6276d9;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
