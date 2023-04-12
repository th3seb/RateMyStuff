import { Base, HTML } from "./base.js";
import { Input } from "./input.js";
import { TextareaAttributes, child } from "./types.js";

export function InText(text?: string, ...children: child[]) {
    const inputtext: Input = new Input(...children).addAttribute("type", "text");
    if (text) inputtext.addAttribute("value", text);
    return inputtext;
}

export function TextArea(text?: string, ...children: child[]) {
    const textarea: Textarea = new Textarea(...children);
    if (text) textarea.appendChild(text);
    return textarea;
}

class Textarea extends Base {
    constructor(...children: child[]) {
        super("textarea", ...children);
        this._component.oninput = () => this.change();
    }

    addAttribute(attribute: TextareaAttributes, value: string): this {
        super.addAttribute(attribute, value);
        return this;
    }

    getValue(): string {
        return this.getComponent().getAttribute("value") || "";
    }

    private change(): void {
        this.getComponent().setAttribute("value", this.getComponent().value);
    }
}
