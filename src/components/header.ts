import { div, h1, span, theme } from "./WebUI/dist/index.js";

export function header() {
    const headerTheme = theme()
        .setRule("width", "100%")
        .setRule("boxShadow", "0 2px 3px rgba(0,0,0,0.1)")
        .setRule("zIndex", "1")
        .setRule("left", "0")
        .setRule("top", "0")
        .setRule("overflow", "hidden")
        .setRule("backgroundColor", "#ffffff")
        .setRule("position", "fixed")
        .setRule("height", "5em");
    const h1Theme = theme().setRule("marginLeft", "1em").setRule("cursor", "pointer");
    let header = div(
        h1("RateMy", span("Stuff").fontFamily("sans-serif").color("red"))
            .fontFamily("sans-serif")
            .color("#000000")
            .applyTheme(h1Theme)
    ).applyTheme(headerTheme);
    return header;
}
