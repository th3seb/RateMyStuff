import { express } from "./movieHandler.js";

export async function checkSession() {
    const text = await (await fetch(express + "login/check")).text();
    const ses = (await JSON.parse(text)) as { loggedIn: boolean; user?: { username: string; password: string } };
    return ses;
}

export interface MyEvent extends Event {
    key: string;
}
