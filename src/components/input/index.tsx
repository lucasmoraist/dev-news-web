import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

interface Props {
  text: string;
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
}

export function Input({ text, type, name, placeholder }: Props) {
  return (
    <Label>
      <Text>{text}</Text>
      <InputStyled type={type} name={name} placeholder={placeholder} />
      <ErrorMessage name={name}>
        {(msg) => (
          <ErrorContainer>
            <ErrorText>{msg}</ErrorText>
          </ErrorContainer>
        )}
      </ErrorMessage>
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Text = styled.span`
  font-family: "Inter-Regular", sans-serif;
  font-size: 1rem;
  color: #4a5568;
`;

const InputStyled = styled(Field)`
  height: 30px;
  border: 1px solid #4a5568;
  border-radius: 5px;
  padding: 0 10px;

  &:focus {
    outline: none;
  }
`;

const ErrorContainer = styled.div`
  margin-top: 4px;
  width: 260px;
`;

const ErrorText = styled.span`
  color: #e63946;
`;
