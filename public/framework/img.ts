import { Base } from "./base.js";
import { child } from "./types.js";

export default function Img(src: string, alt: string, ...children: child[]) {
    return new Base("img", ...children).addAttribute("src", src).addAttribute("alt", alt);
}
