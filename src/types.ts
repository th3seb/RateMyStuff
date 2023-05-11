import session from "express-session";

export interface MySession extends session.Session {
    user: { username: string; password: string };
}
