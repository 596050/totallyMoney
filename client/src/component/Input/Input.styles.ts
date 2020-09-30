import styled from "styled-components";

export const InputContainer = styled.input`
  padding: ${({ theme }) => theme.spacers.size8};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  background-color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSizes.size20};
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.colors.base};
  ::placeholder {
    color: ${({ theme }) => theme.colors.base};
  }
`;
