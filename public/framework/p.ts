import { Base } from "./base.js";
import { child } from "./types.js";

export default function Paragraph(...children: child[]) {
    return new Base("p", ...children);
}
