import { CSSProperties, CSSPropertiesMap, HtmlEvent, child, default_font_family, myHTMLElement } from "./types.js";

export class HTML {
    private _htmlType: string;
    protected _children: child[] = [];
    protected _component: myHTMLElement;

    constructor(htmlType: string, ...children: child[]) {
        this._htmlType = htmlType;
        this._children = children;
        this.setComponent(this.create());
        this.addStyle("font-family", default_font_family);
    }

    protected setComponent(component: myHTMLElement) {
        this._component = component;
    }

    protected create() {
        const element = document.createElement(this._htmlType);
        this._children.forEach((child) => {
            if (typeof child === "string") element.innerHTML += child;
            else element.appendChild(child.getComponent());
        });
        return element as myHTMLElement;
    }

    getComponent() {
        return this._component;
    }

    addStyle(style: CSSProperties, value: string, priority?: string) {
        priority ? this._component.style.setProperty(style, value, priority) : this._component.style.setProperty(style, value);
        return this;
    }

    addStyleFromConfig(config: CSSPropertiesMap) {
        Object.keys(config).forEach((key) => {
            this.addStyle(key as CSSProperties, config[key]);
        });
        return this;
    }

    addAttribute(attribute: string, value: string) {
        this._component.setAttribute(attribute, value);
        return this;
    }

    appendChildren(...children: child[]) {
        children.forEach((child) => {
            this.appendChild(child);
        });
        return this;
    }

    appendChild(child: child) {
        if (typeof child === "string") this._component.innerHTML += child;
        else this._component.appendChild(child.getComponent());
        this._children.push(child);
        return this;
    }

    removeChild(child: child) {
        if (typeof child === "string") this._component.innerHTML = this._component.innerHTML.replace(child, "");
        else this._component.removeChild(child.getComponent());
        return this;
    }

    getChildren(): child[] {
        return this._children;
    }

    addEventListener(event: HtmlEvent, callback: (event: Event) => void) {
        this.getComponent().addEventListener(event, callback);
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
