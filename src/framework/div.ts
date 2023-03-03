import { child } from "./types.js";
import { Base } from "./base.js";

export function Div(...children: child[]) {
    return new Base("div", ...children);
}
