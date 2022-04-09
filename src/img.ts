export function img(url: string, height: number, width: number) {
    let img = new Image(width, height);
    img.src = url;
    return img;
}
