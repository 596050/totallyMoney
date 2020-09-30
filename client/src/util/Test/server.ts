import { Registry, Server } from "miragejs";
import { FactoryDefinition, ModelDefinition } from "miragejs/-types";

export const seedCustomers = [
  {
    title: "Mr",
    firstName: "Ollie",
    lastName: "Murphree",
    dateOfBirth: new Date("01/07/1970").toISOString(),
    employmentStatus: "fullTime",
    address: {
      houseNumber: "700",
      postCode: "BS14 9PR",
    },
    annualIncome: 34000,
  },
  {
    title: "Miss",
    firstName: "Elizabeth",
    lastName: "Edmundson",
    dateOfBirth: new Date("06/29/1984").toISOString(),
    employmentStatus: "student",
    address: {
      houseNumber: "177",
      postCode: "PH12 8UW",
    },
    annualIncome: 17000,
  },
  {
    title: "Mr",
    firstName: "Trevor",
    lastName: "Rieck",
    dateOfBirth: new Date("07/09/1990").toISOString(),
    employmentStatus: "partTime",
    address: {
      houseNumber: "343",
      postCode: "TS25 2NF",
    },
    annualIncome: 15000,
  },
];

export const seedCreditCards = [
  {
    name: "studentLife",
    apr: 0.189,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    creditAvailable: 1200,
  },
  {
    name: "anywhereCard",
    apr: 0.339,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    creditAvailable: 30000,
  },
  {
    name: "liquidCard",
    apr: 0.339,
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    creditAvailable: 300000,
  },
];

export const seedServer = (
  server: Server<
    Registry<
      Record<string, ModelDefinition<any>>,
      Record<string, FactoryDefinition<{}>>
    >
  >
) => {
  seedCustomers.forEach((customer) => {
    server.create("customer", customer);
  });
  seedCreditCards.forEach((creditCard) => {
    server.create("creditCard", creditCard);
  });
};

export type MockServer = Server<
  Registry<
    Record<string, ModelDefinition<{}>>,
    Record<string, FactoryDefinition<{}>>
  >
>;
