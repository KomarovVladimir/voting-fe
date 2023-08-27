import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";
import { createServer, Model, Response, Factory } from "miragejs";

const server = createServer({
    logging: true,

    models: {
        user: Model,
        room: Model,
        message: Model,
        item: Model,
    },

    factories: {
        user: Factory.extend({
            id() {
                return nanoid();
            },
            firstName() {
                return faker.person.firstName();
            },
            lastName() {
                return faker.person.lastName();
            },
            email() {
                return faker.internet.email();
            },
            password() {
                return faker.internet.password();
            },
        }),
        room: Factory.extend({
            name(index) {
                return `Room ${index}`;
            },
            status() {
                return "Active";
            },
            endingDate() {
                return faker.date.recent();
            },
        }),
        message: Factory.extend({
            text() {
                return faker.lorem.lines({ min: 1, max: 3 });
            },
            date() {
                return faker.date.recent();
            },
        }),
        item: Factory.extend({
            name(index) {
                return `Item ${index}`;
            },
            votes(index) {
                return index * 2;
            },
        }),
    },

    seeds(server) {
        server.create("user", {
            email: "test@email.com",
            password: "testpassword123123",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        });
        server.createList("room", 5).forEach(({ id: roomId }) => {
            server
                .createList("user", 5)
                .forEach(({ id: userId, firstName, lastName }) => {
                    server.createList("message", 1, {
                        roomId,
                        userId,
                        userName: `${firstName} ${lastName}`,
                    });
                });
            server.createList("item", 5, {
                roomId,
            });
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
            const attrs = JSON.parse(request.requestBody);

            return schema.users.create(attrs);
        });

        this.get("/rooms");
        this.post("/rooms", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);

            return schema.rooms.create(attrs);
        });
        this.get("/rooms/:roomId/items", (schema, request) => {
            return schema.items.where({ roomId: request.params.roomId });
        });
        this.get("/rooms/:roomId", (schema, request) => {
            return schema.rooms.find(request.params.roomId);
        });
        this.delete("rooms/:roomId");
        this.post("/rooms/addItem", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);

            return schema.items.create({ ...attrs, votes: 0 });
        });
        this.delete("/rooms/deleteItem", (schema, request) => {
            const { id } = JSON.parse(request.requestBody);

            return schema.items.find(id).destroy();
        });
        this.get("/rooms/:roomId/chat", (schema, request) => {
            return schema.messages.where({ roomId: request.params.roomId });
        });
        this.post("/chat", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);

            return schema.messages.create({
                ...attrs,
                date: new Date().toUTCString(),
            });
        });
        this.delete("/chat", (schema, request) => {
            const { id } = JSON.parse(request.requestBody);

            return schema.messages.find(id).destroy();
        });

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

console.log(server.db);
