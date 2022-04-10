import { h1, theme } from "./WebUI/dist/index.js";

export function spacerTop() {
    const spacerTheme = theme().setRule("marginBottom", "1em");
    return h1(".").applyTheme(spacerTheme);
}
