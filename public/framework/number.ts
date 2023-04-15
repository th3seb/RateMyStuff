import { Base, HTML } from "./base.js";
import Input from "./input.js";
import { child } from "./types.js";

export default function InNumber(value?: number, ...children: child[]) {
    const inputnumber: Input = new Input(...children).addAttribute("type", "number");
    if (value) inputnumber.addAttribute("value", value + "");
    return inputnumber;
}
