import styled from "styled-components";

interface Props {
  button: "primary" | "secondary";
  type?: "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export function Button({ button, type, onClick, children, className }: Props) {
  return (
    <>
      {button === "primary" ? (
        <ButtonPrimary type={type} onClick={onClick} className={className}>
          {children}
        </ButtonPrimary>
      ) : (
        <ButtonSecondary type={type} onClick={onClick}>
          {children}
        </ButtonSecondary>
      )}
    </>
  );
}

const ButtonPrimary = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  cursor: pointer;

  background-color: #007bff;
  color: #fff;
  border-radius: 5px;

  &:hover {
    background-color: #298efa;
    transition: 0.5s;
  }

  &:not(:hover) {
    transition: 0.5s;
  }
`;

const ButtonSecondary = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  cursor: pointer;

  background: none;

  &:hover {
    text-decoration: underline;
    transition: 0.2s;
  }
`;
