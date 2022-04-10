export function img(url: string, altTag?: string, width?: number, height?: number) {
    let img: HTMLImageElement;
    height && width ? (img = new Image(width, height)) : (img = new Image());
    altTag ? (img.alt = altTag) : (img.alt = "none");
    img.src = url;
    return img;
}
