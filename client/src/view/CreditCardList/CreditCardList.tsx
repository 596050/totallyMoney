import React from "react";
import { Box, Flex } from "@rebass/grid";

import { CardSelect, List } from "../../component";
import { CreditCardNameMap } from "../../typings/types";
import { formatCurrency, useCreditCardEligibility } from "../../util";

import {
  CreditCardItemCell,
  CreditCardItemCellDatum,
  CreditCardItemContainer,
  CreditCardListItemHeading,
} from "./CreditCardList.styles";

type CreditCardItemDataProps = {
  creditCard: CreditCard;
};

const CreditCardItemData = ({ creditCard }: CreditCardItemDataProps) => {
  return (
    <Box>
      <CreditCardItemCell>
        <div>Balance Transfer offer duration</div>
        <CreditCardItemCellDatum>
          {creditCard.balanceTransferOfferDuration} months
        </CreditCardItemCellDatum>
      </CreditCardItemCell>
      <CreditCardItemCell>
        <div>0% Purchase offer duration</div>
        <CreditCardItemCellDatum>
          {creditCard.purchaseOfferDuration || 0} months
        </CreditCardItemCellDatum>
      </CreditCardItemCell>
      <CreditCardItemCell>
        <div>Representative APR (variable)</div>
        <CreditCardItemCellDatum>
          {(creditCard.apr * 100).toFixed(2)} % APR
        </CreditCardItemCellDatum>
      </CreditCardItemCell>
      <CreditCardItemCell>
        <div>Amount of credit available</div>
        <CreditCardItemCellDatum data-testid="e2e-creditCardAvailableAmount">
          {formatCurrency(creditCard.creditAvailable)}
        </CreditCardItemCellDatum>
      </CreditCardItemCell>
    </Box>
  );
};

const CreditCardList = () => {
  const {
    eligibleCreditCards,
    creditAvaialble,
    handleSelectCreditCard,
  } = useCreditCardEligibility();

  return (
    <>
      <Flex flexDirection="column" alignItems="center" width="100%" pt={20}>
        <h2>Credit cards</h2>
        <p data-testid="e2e-creditAvailable">
          Credit Available {formatCurrency(creditAvaialble)}
        </p>
      </Flex>
      <List alignItems="center" data-testid="e2e-creditCardList">
        {(eligibleCreditCards || [])?.map((creditCard: CreditCard) => (
          <CardSelect
            data-testid="e2e-eligibleCreditCard"
            key={creditCard?.id}
            style={{ maxWidth: "900px", width: "80%" }}
            onClick={() =>
              handleSelectCreditCard(creditCard, creditCard?.isSelected)
            }
            className={`${creditCard?.isSelected ? "selected" : ""}`}
          >
            <CreditCardItemContainer>
              <CreditCardListItemHeading>
                {creditCard?.name ? CreditCardNameMap[creditCard?.name] : "-"}
              </CreditCardListItemHeading>
              <CreditCardItemData creditCard={creditCard} />
            </CreditCardItemContainer>
          </CardSelect>
        ))}
      </List>
    </>
  );
};

export default CreditCardList;
