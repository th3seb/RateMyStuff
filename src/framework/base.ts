import { child } from "./types.js";

export class HTML {
    private _htmlType: string;
    protected _children: child[] = [];
    protected _component: HTMLElement;

    constructor(htmlType: string, ...children: child[]) {
        this._htmlType = htmlType;
        this._children = children;
        this.setComponent(this.create());
    }

    protected setComponent(component: HTMLElement) {
        this._component = component;
    }

    protected create() {
        const element = document.createElement(this._htmlType);
        this._children.forEach((child) => {
            if (typeof child === "string") element.innerHTML += child;
            else element.appendChild(child.getComponent());
        });
        return element;
    }

    getComponent() {
        return this._component;
    }

    addStyle(style: string, value: string) {
        this._component.style.setProperty(style, value);
        return this;
    }

    addAttribute(attribute: string, value: string) {
        this._component.setAttribute(attribute, value);
        return this;
    }
}

export function base(htmlType: string, ...children: child[]) {
    return new HTML(htmlType, ...children);
}

export class Base extends HTML {
    constructor(htmlType: string, ...children: child[]) {
        super(htmlType, ...children);
    }
}
