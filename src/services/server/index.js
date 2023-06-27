import { faker } from "@faker-js/faker";
import { createServer, Model, Response } from "miragejs";

createServer({
    logging: true,

    models: {
        user: Model,
        restaurant: Model,
        dish: Model,
    },

    seeds(server) {
        server.create("user", {
            role: "Admin",
            email: "admin@email.com",
            password: "admin",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.create("user", {
            role: "User",
            email: "user1@email.com",
            password: "user1",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.create("user", {
            role: "User",
            email: "user2@email.com",
            password: "user2",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.create("restaurant", {
            name: "Tokyo City",
            address: "Невский пр. 71",
        });
        server.create("dish", {
            firstName: "Стейк Рибай",
            price: "870.00",
        });
    },

    routes() {
        this.namespace = "/api";
        this.get("/users");

        this.get("/restaurants");

        this.get("/dishes");

        this.post("/login", (schema, request) => {
            const email = JSON.parse(request.requestBody).email;
            const user = schema.users.findBy({ email });

            return user
                ? {
                      token: "token",
                      role: user.role,
                      email: user.email,
                  }
                : {};
        });

        this.post("/logout", (schema, request) => {
            const email = JSON.parse(request.requestBody).email;
            schema.users.findBy({ email }).token = null;

            return new Response(200);
        });
    },
});
