import { Base } from "./base.js";
import { child } from "./types.js";

export default function Span(...children: child[]) {
    return new Base("span", ...children);
}
