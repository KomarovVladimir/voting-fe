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
            email: "test@email.com",
            password: "testpassword123123",
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
        server.create("restaurant", {
            name: "Tokyo City",
            address: "Невский пр. 71",
        });
        server.create("restaurant", {
            name: "Tokyo City",
            address: "Невский пр. 71",
        });
        server.create("restaurant", {
            name: "Tokyo City",
            address: "Невский пр. 71",
        });
        server.create("restaurant", {
            name: "Tokyo City",
            address: "Невский пр. 71",
        });
        server.create("restaurant", {
            name: "Tokyo City",
            address: "Невский пр. 71",
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
        this.get("/users/:id");
        this.delete("users/:id", (schema, request) =>
            schema.users.find(request.params.id).destroy()
        );
        this.post("/users", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);

            return schema.users.create(attrs);
        });
        // this.update("/users", (schema, request) => {
        //     let attrs = JSON.parse(request.requestBody);

        //     return schema.users.update(attrs);
        // });

        this.get("/restaurants");
        this.get("/restaurants/:id");
        this.delete("restaurants/:id", (schema, request) =>
            schema.restaurants.find(request.params.id).destroy()
        );
        this.post("/restaurants", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);

            return schema.restaurants.create(attrs);
        });
        // this.update("/restaurants", (schema, request) => {
        //     let attrs = JSON.parse(request.requestBody);

        //     return schema.restaurants.update(attrs);
        // });

        this.get("/dishes");
        this.get("/dishes/:id");
        this.delete("dishes/:id", (schema, request) =>
            schema.dishes.find(request.params.id).destroy()
        );
        this.post("/dishes", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);

            return schema.dishes.create(attrs);
        });
        // this.update("/dishes", (schema, request) => {
        //     let attrs = JSON.parse(request.requestBody);

        //     return schema.dishes.update(attrs);
        // });

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody);
            const user = schema.users.findBy({ email });

            return user && user.password === password
                ? new Response(
                      200,
                      {},
                      {
                          data: {
                              token: "token",
                              role: user.role,
                              email: user.email,
                          },
                      }
                  )
                : new Response(
                      401,
                      {},
                      { errors: ["Error: wrong login or password"] }
                  );
        });

        this.post("/logout", (schema, request) => {
            const email = JSON.parse(request.requestBody).email;
            schema.users.findBy({ email }).token = null;

            return new Response(200);
        });
    },
});
