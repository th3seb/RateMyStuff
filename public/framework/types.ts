import { Base } from "./base.js";

export type child = Base | string;

export const default_font_family = "Author-Regular";

export default interface Movie {
    movie_id: string;
    name: string;
    img: string;
    description: string;
    rating: number;
}

export type TextareaAttributes =
    | "accesskey"
    | "autofocus"
    | "cols"
    | "dirname"
    | "disabled"
    | "form"
    | "maxlength"
    | "minlength"
    | "name"
    | "placeholder"
    | "readonly"
    | "required"
    | "rows"
    | "spellcheck"
    | "tabindex"
    | "wrap"
    | "class"
    | "id"
    | "style"
    | "title"
    | "lang"
    | "translate"
    | "dir"
    | "hidden"
    | "slot"
    | "autocapitalize"
    | "autocomplete"
    | "autocorrect"
    | "inputmode"
    | "itemprop"
    | "part";

export type InputAttributes =
    | "accept"
    | "accesskey"
    | "alt"
    | "autocomplete"
    | "autofocus"
    | "capture"
    | "checked"
    | "class"
    | "dirname"
    | "disabled"
    | "form"
    | "formaction"
    | "formenctype"
    | "formmethod"
    | "formnovalidate"
    | "formtarget"
    | "height"
    | "id"
    | "inputmode"
    | "ismap"
    | "lang"
    | "list"
    | "max"
    | "maxlength"
    | "minlength"
    | "min"
    | "multiple"
    | "name"
    | "pattern"
    | "placeholder"
    | "readonly"
    | "required"
    | "size"
    | "spellcheck"
    | "src"
    | "step"
    | "style"
    | "tabindex"
    | "title"
    | "translate"
    | "type"
    | "value"
    | "width";

export type HtmlEvent =
    | "abort"
    | "animationcancel"
    | "animationend"
    | "animationiteration"
    | "animationstart"
    | "auxclick"
    | "beforeinput"
    | "blur"
    | "cancel"
    | "canplay"
    | "canplaythrough"
    | "change"
    | "click"
    | "close"
    | "compositionend"
    | "compositionstart"
    | "compositionupdate"
    | "contextmenu"
    | "copy"
    | "cuechange"
    | "cut"
    | "dblclick"
    | "drag"
    | "dragend"
    | "dragenter"
    | "dragleave"
    | "dragover"
    | "dragstart"
    | "drop"
    | "durationchange"
    | "emptied"
    | "ended"
    | "error"
    | "focus"
    | "focusin"
    | "focusout"
    | "formdata"
    | "fullscreenchange"
    | "fullscreenerror"
    | "gotpointercapture"
    | "input"
    | "invalid"
    | "keydown"
    | "keypress"
    | "keyup"
    | "load"
    | "loadeddata"
    | "loadedmetadata"
    | "loadstart"
    | "lostpointercapture"
    | "mousedown"
    | "mouseenter"
    | "mouseleave"
    | "mousemove"
    | "mouseout"
    | "mouseover"
    | "mouseup"
    | "paste"
    | "pause"
    | "play"
    | "playing"
    | "pointercancel"
    | "pointerdown"
    | "pointerenter"
    | "pointerleave"
    | "pointermove"
    | "pointerout"
    | "pointerover"
    | "pointerup"
    | "progress"
    | "ratechange"
    | "reset"
    | "resize"
    | "scroll"
    | "securitypolicyviolation"
    | "seeked"
    | "seeking"
    | "select"
    | "selectionchange"
    | "selectstart"
    | "slotchange"
    | "stalled"
    | "submit"
    | "suspend"
    | "timeupdate"
    | "toggle"
    | "touchcancel"
    | "touchend"
    | "touchmove"
    | "touchstart"
    | "transitioncancel"
    | "transitionend"
    | "transitionrun"
    | "transitionstart"
    | "volumechange"
    | "waiting"
    | "webkitanimationend"
    | "webkitanimationiteration"
    | "webkitanimationstart"
    | "webkittransitionend"
    | "wheel";

export type CSSProperties =
    | "align-content"
    | "align-items"
    | "align-self"
    | "background"
    | "background-image"
    | "background-color"
    | "background-position"
    | "background-repeat"
    | "background-size"
    | "border"
    | "border-bottom"
    | "border-color"
    | "border-left"
    | "border-radius"
    | "border-right"
    | "border-top"
    | "border-width"
    | "bottom"
    | "box-sizing"
    | "clear"
    | "color"
    | "cursor"
    | "display"
    | "flex"
    | "flex-direction"
    | "flex-wrap"
    | "float"
    | "font-size"
    | "font-style"
    | "font-weight"
    | "height"
    | "justify-content"
    | "left"
    | "letter-spacing"
    | "line-height"
    | "list-style"
    | "margin"
    | "margin-bottom"
    | "margin-left"
    | "margin-right"
    | "margin-top"
    | "max-height"
    | "max-width"
    | "min-height"
    | "min-width"
    | "opacity"
    | "overflow"
    | "padding"
    | "padding-bottom"
    | "padding-left"
    | "padding-right"
    | "padding-top"
    | "position"
    | "right"
    | "text-align"
    | "text-decoration"
    | "text-overflow"
    | "top"
    | "transform"
    | "transition"
    | "visibility"
    | "white-space"
    | "width"
    | "word-break"
    | "z-index"
    | "font-family"
    | "overflow-x"
    | "overflow-y"
    | "box-shadow"
    | "text-shadow"
    | "text-transform"
    | "font-variant"
    | "font-stretch"
    | "font-kerning"
    | "font-variant-ligatures"
    | "font-variant-caps"
    | "font-variant-numeric"
    | "font-variant-east-asian"
    | "font-feature-settings"
    | "font-language-override"
    | "font-optical-sizing"
    | "font-size-adjust"
    | "font-synthesis"
    | "font-variant-alternates"
    | "font-variant-position"
    | "font-variant-numeric-figure"
    | "font-variant-numeric-spacing"
    | "font-variant-numeric-fraction"
    | "font-variant-numeric-ordinal"
    | "font-variant-numeric-slashed-zero"
    | "font-variant-numeric-east-asian-variant"
    | "font-variant-numeric-east-asian-width"
    | "font-variant-numeric-east-asian-variant"
    | "font-variant-numeric-east-asian-width"
    | "font-variant-east-asian-variant"
    | "font-variant-east-asian-width"
    | "text-decoration-line"
    | "text-decoration-style"
    | "text-decoration-color"
    | "text-decoration-thickness"
    | "text-decoration-skip-ink"
    | "text-underline-offset"
    | "text-underline-position"
    | "text-emphasis"
    | "text-emphasis-color"
    | "text-emphasis-style"
    | "text-emphasis-position"
    | "text-indent"
    | "text-justify"
    | "text-orientation"
    | "text-overflow"
    | "text-rendering";

export interface CSSPropertiesMap {
    "align-content"?: string;
    "align-items"?: string;
    "align-self"?: string;
    background?: string;
    "background-image"?: string;
    "background-color"?: string;
    "background-position"?: string;
    "background-repeat"?: string;
    "background-size"?: string;
    border?: string;
    "border-bottom"?: string;
    "border-color"?: string;
    "border-left"?: string;
    "border-radius"?: string;
    "border-right"?: string;
    "border-top"?: string;
    "border-width"?: string;
    bottom?: string;
    "box-sizing"?: string;
    clear?: string;
    color?: string;
    cursor?: string;
    display?: string;
    flex?: string;
    "flex-direction"?: string;
    "flex-wrap"?: string;
    float?: string;
    "font-size"?: string;
    "font-style"?: string;
    "font-weight"?: string;
    height?: string;
    "justify-content"?: string;
    left?: string;
    "letter-spacing"?: string;
    "line-height"?: string;
    "list-style"?: string;
    margin?: string;
    "margin-bottom"?: string;
    "margin-left"?: string;
    "margin-right"?: string;
    "margin-top"?: string;
    "max-height"?: string;
    "max-width"?: string;
    "min-height"?: string;
    "min-width"?: string;
    opacity?: string;
    overflow?: string;
    padding?: string;
    "padding-bottom"?: string;
    "padding-left"?: string;
    "padding-right"?: string;
    "padding-top"?: string;
    position?: string;
    right?: string;
    "text-align"?: string;
    "text-decoration"?: string;
    "text-overflow"?: string;
    top?: string;
    transform?: string;
    transition?: string;
    visibility?: string;
    "white-space"?: string;
    width?: string;
    "word-break"?: string;
    "z-index"?: string;
    "font-family"?: string;
    "overflow-x"?: string;
    "overflow-y"?: string;
    "box-shadow"?: string;
    "text-shadow"?: string;
    "text-transform"?: string;
    "font-variant"?: string;
    "font-stretch"?: string;
    "font-kerning"?: string;
    "font-variant-ligatures"?: string;
    "font-variant-caps"?: string;
    "font-variant-numeric"?: string;
    "font-variant-east-asian"?: string;
    "font-feature-settings"?: string;
    "font-language-override"?: string;
    "font-optical-sizing"?: string;
    "font-size-adjust"?: string;
    "font-synthesis"?: string;
    "font-variant-alternates"?: string;
    "font-variant-position"?: string;
    "font-variant-numeric-figure"?: string;
    "font-variant-numeric-spacing"?: string;
    "font-variant-numeric-fraction"?: string;
    "font-variant-numeric-ordinal"?: string;
    "font-variant-numeric-slashed-zero"?: string;
    "font-variant-east-asian-variant"?: string;
    "font-variant-east-asian-width"?: string;
    "text-decoration-line"?: string;
    "text-decoration-style"?: string;
    "text-decoration-color"?: string;
    "text-decoration-thickness"?: string;
    "text-decoration-skip-ink"?: string;
    "text-underline-offset"?: string;
    "text-underline-position"?: string;
    "text-emphasis"?: string;
    "text-emphasis-color"?: string;
    "text-emphasis-style"?: string;
    "text-emphasis-position"?: string;
    "text-indent"?: string;
    "text-justify"?: string;
    "text-orientation"?: string;
    "text-rendering"?: string;
}

export interface myHTMLElement extends HTMLElement {
    value: string;
}
