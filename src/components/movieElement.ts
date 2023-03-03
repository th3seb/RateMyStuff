import { Div } from "../framework/div.js";
import { H1 } from "../framework/headings.js";
import { Img } from "../framework/img.js";
import { Paragraph } from "../framework/p.js";

export function Movie(name: string, pic: string, desc: string, rating: number) {
    return Div(
        Img(pic, name).addStyle("border-radius", "5px").addStyle("width", "275px").addStyle("height", "380px"),
        Paragraph(`Rating: ${rating}/10`),
        H1(name).addStyle("width", "275px"),
        Div(Paragraph(desc)).addStyle("width", "265px").addStyle("margin", "0 auto")
    )
        .addStyle("border-radius", "10px")
        .addStyle("margin", "10px")
        .addStyle("width", "300px")
        .addStyle("height", "600px")
        .addStyle("overflow-y", "auto")
        .addStyle("padding", "10px")
        .addStyle("text-align", "center")
        .addStyle("display", "inline-block");
}
