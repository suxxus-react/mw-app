import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", null),

  // Handles a GET /user request
  rest.get("/user", (_, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        username: "admin",
      })
    );
  }),
];
