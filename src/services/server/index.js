import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";
import { createServer, Model, Response } from "miragejs";

createServer({
    logging: true,

    models: {
        users: Model,
        rooms: Model,
    },

    seeds(server) {
        server.create("user", {
            email: "test@email.com",
            password: "testpassword123123",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.create("user", {
            email: "user1@email.com",
            password: "user1",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.create("user", {
            email: "user2@email.com",
            password: "user2",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.create("room", {
            id: nanoid(),
            name: "Restaurants",
        });
        server.create("room", {
            id: nanoid(),
            name: "Movies",
        });
        server.create("room", {
            id: nanoid(),
            name: "Test",
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

        this.get("/rooms");
        this.get("/rooms/:id");
        this.delete("rooms/:id", (schema, request) =>
            schema.rooms.find(request.params.id).destroy()
        );
        this.post("/rooms", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);

            return schema.rooms.create(attrs);
        });
        // this.update("/rooms", (schema, request) => {
        //     let attrs = JSON.parse(request.requestBody);

        //     return schema.rooms.update(attrs);
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
