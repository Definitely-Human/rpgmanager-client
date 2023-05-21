import { rest } from "msw";
import { API_URL } from "../../src/utils/urls";

export const handlers = [
    rest.get(API_URL + "/user/me/", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                username: "test",
                email: "test@example.com",
            })
        );
    }),
];
