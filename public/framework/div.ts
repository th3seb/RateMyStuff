import { child } from "./types.js";
import { Base } from "./base.js";

export default function Div(...children: child[]) {
    return new Base("div", ...children);
}
