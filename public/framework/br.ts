import { Base } from "./base.js";
import { child } from "./types.js";

export default function Br(...children: child[]) {
    return new Base("br", ...children);
}
