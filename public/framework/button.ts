import { Base } from "./base.js";
import Input from "./input.js";
import { child } from "./types.js";

export function Button(...children: child[]) {
    return new Base("button", ...children).addStyle("font-family", null);
}

export default function InButton(text: string, ...children: child[]) {
    return new Input(...children).addAttribute("type", "button").addAttribute("value", text);
}
