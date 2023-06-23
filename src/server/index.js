import { createServer, Model, Response } from "miragejs";

createServer({
    logging: true,

    models: {
        user: Model,
    },

    seeds(server) {
        server.create("user", {
            role: "Admin",
            email: "admin@email.com",
            password: "admin",
        });
    },

    routes() {
        this.namespace = "/api";
        this.get("/users");

        this.post("/users/login", (schema, request) => {
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

        this.post("/users/logout", (schema, request) => {
            const email = JSON.parse(request.requestBody).email;
            const user = schema.users.findBy({ email });

            return user
                ? {
                      token: "token",
                      role: user.role,
                      email: user.email,
                  }
                : new Response(404);
        });
    },
});
