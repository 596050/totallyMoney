import { seedCreditCards, seedCustomers } from "../..";

import { pickCardsForCustomer } from "./CreditCardElibility";

describe("CreditCardElibility", () => {
  describe("pickCardsForCustomer", () => {
    it("should return studentLife card for customer with employment status of student", () => {
      const cards = pickCardsForCustomer({
        creditCards: seedCreditCards,
        customer: seedCustomers.find((customer) => {
          return customer.employmentStatus === "student";
        }),
      });

      expect(cards.findIndex((card) => card.name === "studentLife") > -1).toBe(
        true
      );
    });

    it("should not return studentLife card for customer without employment status of student", () => {
      const cards = pickCardsForCustomer({
        creditCards: seedCreditCards,
        customer: seedCustomers.find((customer) => {
          return customer.employmentStatus != "student";
        }),
      });

      expect(cards.findIndex((card) => card.name === "studentLife") > -1).toBe(
        false
      );
    });

    it("should return liquid card for customer with income of more than 16000", () => {
      const cards = pickCardsForCustomer({
        creditCards: seedCreditCards,
        customer: seedCustomers.find((customer) => {
          return customer.annualIncome >= 16000;
        }),
      });

      expect(cards.findIndex((card) => card.name === "liquidCard") > -1).toBe(
        true
      );
    });

    it("should not return liquid card for customer with income of less than 16000", () => {
      const cards = pickCardsForCustomer({
        creditCards: seedCreditCards,
        customer: seedCustomers.find((customer) => {
          return customer.annualIncome < 16000;
        }),
      });

      expect(cards.findIndex((card) => card.name === "liquidCard") > -1).toBe(
        false
      );
    });

    it("should return anywhere card for all customers", () => {
      seedCustomers.forEach((customer) => {
        const cards = pickCardsForCustomer({
          creditCards: seedCreditCards,
          customer: customer,
        });

        expect(
          cards.findIndex((card) => card.name === "anywhereCard") > -1
        ).toBe(true);
      });
    });

    it("should handle unexpected inputs", () => {
      let cards = pickCardsForCustomer({
        creditCards: [],
        customer: [],
      });

      expect(cards).toEqual([]);

      cards = pickCardsForCustomer({
        creditCards: undefined,
        customer: undefined,
      });

      expect(cards).toEqual([]);
    });
  });
});
