import { Base } from "./base.js";
import { InputAttributes, child } from "./types.js";

export default class Input extends Base {
    constructor(...children: child[]) {
        super("input", ...children);
        this._component.oninput = () => this.change();
    }

    addAttribute(attribute: InputAttributes, value: string): this {
        super.addAttribute(attribute, value);
        return this;
    }

    getValue(): string {
        return this.getComponent().getAttribute("value") || "";
    }

    private change(): void {
        if (this._component.getAttribute("type") === "number")
            if (+this._component.getAttribute("max") < +this._component.value) this._component.value = this._component.getAttribute("max") || "";
            else if (+this._component.getAttribute("min") > +this._component.value) this._component.value = this._component.getAttribute("min") || "";
        this.getComponent().setAttribute("value", this.getComponent().value);
    }
}
