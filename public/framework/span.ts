import { Base } from "./base.js";
import { child } from "./types.js";

export function Span(...children: child[]) {
    return new Base("span", ...children);
}
