import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const CardContainer = styled(Flex)`
  overflow: auto;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacers.size16};
  padding: ${({ theme }) => theme.spacers.size4};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  background-color: ${({ theme }) => theme.colors.foreground};
`;
