import { Base } from "./base.js";
import { child } from "./types.js";

export function Paragraph(...children: child[]) {
    return new Base("p", ...children);
}
