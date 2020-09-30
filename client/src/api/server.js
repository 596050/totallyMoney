import { hasMany, Model, Server } from "miragejs";

import { seedCreditCards, seedCustomers } from "../util";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      customers: Model.extend({
        creditCards: hasMany(),
      }),
      creditCards: Model,
    },

    seeds(server) {
      seedCreditCards.forEach((creditCard) => {
        server.create("creditCard", creditCard);
      });

      seedCustomers.forEach((customer) => {
        server.create("customer", customer);
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 100;

      this.get("/creditCards", (schema) => {
        return schema.creditCards.all();
      });

      this.get("/customers", (schema) => {
        return schema.customers.all();
      });

      this.post(
        "/create-customer",
        (schema, request) => {
          let attrs = JSON.parse(request.requestBody).customer;
          return schema.customers.create(attrs);
        },
        { timing: 500 }
      );

      this.patch("/patch-customer/:id", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).customer;
        return schema.customers.find(request.params.id).update(attrs);
      });
    },
  });
  return server;
}
