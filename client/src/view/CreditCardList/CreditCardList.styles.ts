import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const CreditCardItemContainer = styled.div`
  padding: ${({ theme }) => theme.spacers.size16};
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
  }
`;

export const CreditCardListItemHeading = styled.h3``;

export const CreditCardItemCell = styled(Flex)`
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacers.size8} 0;
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.size12};
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.baseLight};
`;

export const CreditCardItemCellDatum = styled.div`
  text-align: right;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  align-self: flex-end;
`;

export const CreditCardItemCellTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;
