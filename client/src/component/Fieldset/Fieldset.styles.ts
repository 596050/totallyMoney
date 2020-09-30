import styled from "styled-components";

export const FieldsetContainer = styled.fieldset<{ spacer?: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  & > label + input,
  & > label + select {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: ${({ spacer, theme }) => spacer || theme.spacers.size16};
    &:last-child {
      margin-bottom: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.size12};
  }
`;
