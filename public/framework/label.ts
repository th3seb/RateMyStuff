import { Base } from "./base.js";
import { child } from "./types.js";

export default function Label(forAttribute: string, ...children: child[]) {
    return new Base("label", ...children).addAttribute("for", forAttribute);
}
