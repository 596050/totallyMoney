import styled from "styled-components";

export const FormContainer = styled.form<{ spacer?: string }>`
  max-width: 500px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacers.size40};
  width: 100%;
  & > label + input,
  & > label + select {
    margin-bottom: ${({ spacer, theme }) => spacer || theme.spacers.size16};
    &:last-child {
      margin-bottom: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: ${({ theme }) => theme.spacers.size16};
    font-size: ${({ theme }) => theme.typography.fontSizes.size12};
  }
`;
