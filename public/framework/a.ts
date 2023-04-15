import { Base } from "./base.js";
import { child } from "./types.js";

export default function A(...children: child[]) {
    return new Base("a", ...children);
}
