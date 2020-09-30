import { useEffect, useState } from "react";

import { useStoreContext } from "../../../context";
import { formatString } from "../../Format";

type PickCardsForCustomerProps = {
  creditCards: CreditCard[];
  customer: Customer;
};

type UseCreditCardEligibilityReturn = {
  eligibleCreditCards: CreditCard[];
  creditAvaialble: number;
  handleSelectCreditCard: (
    creditCard: CreditCard,
    isSelected?: boolean
  ) => void;
};

const isEligibleForStudentLife = (customer: Customer) => (
  creditCard: CreditCard
) => {
  return (
    formatString(customer?.employmentStatus) === "student" &&
    creditCard.name === "studentLife"
  );
};

const isEligibleForLiquidCard = (customer: Customer) => (
  creditCard: CreditCard
) => {
  return (
    (customer?.annualIncome || 0) > 16000 && creditCard.name === "liquidCard"
  );
};

const isEligibleForAnywhereCard = (customer: Customer) => (
  creditCard: CreditCard
) => {
  return !!customer && creditCard.name === "anywhereCard";
};

export const pickCardsForCustomer = ({
  creditCards,
  customer,
}: PickCardsForCustomerProps) =>
  (creditCards || []).filter(
    (creditCard) =>
      isEligibleForStudentLife(customer)(creditCard) ||
      isEligibleForLiquidCard(customer)(creditCard) ||
      isEligibleForAnywhereCard(customer)(creditCard)
  );

// keeping in a hook allows for logic to be tested separately if required
// and means this feature could be abstracted and used elsewhere
export const useCreditCardEligibility = (): UseCreditCardEligibilityReturn => {
  const { state: { customer, creditCards } = {}, setState } = useStoreContext();
  const [eligibleCreditCards, setEligibleCreditCards] = useState<CreditCard[]>(
    []
  );
  const [creditAvaialble, setCreditAvaialble] = useState<number>(0);

  const handleSelectCreditCard = (
    creditCard: CreditCard,
    isSelected?: boolean
  ) => {
    setState &&
      setState((prevState) => {
        const updatedCreditCards = prevState?.creditCards?.map((card) => {
          let updatedCard = card;
          if (card?.id === creditCard?.id) {
            updatedCard = { ...card, isSelected: !isSelected };
          }
          return updatedCard;
        });
        return {
          ...prevState,
          creditCards: updatedCreditCards,
        };
      });
  };

  useEffect(() => {
    if (customer && creditCards) {
      setEligibleCreditCards(
        pickCardsForCustomer({ creditCards, customer }) || []
      );
    }
  }, [creditCards, customer]);

  useEffect(() => {
    setCreditAvaialble(
      eligibleCreditCards
        ?.filter((card) => card.isSelected)
        .reduce(
          (sum: number, card: CreditCard) => sum + card.creditAvailable,
          0
        ) ?? 0
    );
  }, [eligibleCreditCards]);

  return { eligibleCreditCards, creditAvaialble, handleSelectCreditCard };
};
