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
            avatar() {
                return faker.image.avatar();
            },
        }),
        room: Factory.extend({
            name(index) {
                return `Room ${index}`;
            },
            status() {
                return 0;
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
            avatar: faker.image.avatar(),
        });
        server.createList("room", 5).forEach(({ id: roomId }) => {
            server
                .createList("user", 5)
                .forEach(({ id: userId, firstName, lastName, avatar }) => {
                    server.createList("message", 1, {
                        roomId,
                        userId,
                        avatar,
                        username: `${firstName} ${lastName}`,
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
        this.post("/users", (schema, { requestBody }) => {
            const attrs = JSON.parse(requestBody);

            return schema.users.create(attrs);
        });
        this.get("/users/:userId");
        this.delete("users/:userId");
        this.patch(
            "/users/:userId",
            (schema, { requestBody, params: { userId } }) => {
                let attrs = JSON.parse(requestBody);

                return schema.users.find(userId).update(attrs);
            }
        );

        this.get("/rooms");
        this.post("/rooms", (schema, { requestBody }) => {
            const attrs = JSON.parse(requestBody);

            return schema.rooms.create(attrs);
        });

        this.get("/rooms/:roomId", (schema, { params: { roomId } }) => {
            return schema.rooms.find(roomId);
        });
        this.delete("/rooms/:roomId");
        this.patch(
            "/rooms/:roomId",
            (schema, { requestBody, params: { roomId } }) => {
                let attrs = JSON.parse(requestBody);

                return schema.rooms.find(roomId).update(attrs);
            }
        );

        this.get("/rooms/:roomId/items", (schema, { params: { roomId } }) => {
            return schema.items.where({ roomId });
        });
        this.post(
            "/rooms/:roomId/items",
            (schema, { requestBody, params: { roomId } }) => {
                const attrs = JSON.parse(requestBody);

                return schema.items.create({
                    ...attrs,
                    roomId,
                    votes: 0,
                });
            }
        );

        this.delete("/items/:itemId", (schema, { params: { itemId } }) => {
            return schema.items.find(itemId).destroy();
        });
        this.patch(
            "/items/:itemId",
            (schema, { requestBody, params: { itemId } }) => {
                let attrs = JSON.parse(requestBody);

                return schema.items.find(itemId).update(attrs);
            }
        );

        this.get(
            "/rooms/:roomId/messages",
            (schema, { params: { roomId } }) => {
                return schema.messages.where({ roomId });
            }
        );
        this.post(
            "/rooms/:roomId/messages",
            (schema, { requestBody, params: { roomId } }) => {
                const attrs = JSON.parse(requestBody);

                return schema.messages.create({
                    ...attrs,
                    roomId,
                    date: new Date().toUTCString(),
                });
            }
        );
        this.delete(
            "/messages/:messageId",
            (schema, { params: { messageId } }) => {
                return schema.messages.find(messageId).destroy();
            }
        );

        this.post("users/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody);
            const user = schema.users.findBy({ email });

            return user && user.password === password
                ? new Response(
                      200,
                      {},
                      {
                          data: {
                              ...user.attrs,
                              token: "token",
                          },
                      }
                  )
                : new Response(
                      401,
                      {},
                      { errors: ["Error: wrong login or password"] }
                  );
        });

        this.post("users/logout", (schema, request) => {
            const email = JSON.parse(request.requestBody).email;
            schema.users.findBy({ email }).token = null;

            return new Response(200);
        });

        this.post("users/register", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            const user = schema.users.findBy({ email: attrs.email });

            if (!user) {
                return schema.users.create({ ...attrs });
            } else {
                new Response(
                    409,
                    {},
                    { errors: ["Error: User with this email already exists"] }
                );
            }
        });
    },
});

console.log(server.db);
