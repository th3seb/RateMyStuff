import { IMovie } from "../db.js";
import { img } from "./img.js";
import { div, h1, h2, p, theme } from "./WebUI/dist/index.js";

class MovieElement {
    _name: string;
    _pic: string;
    _desc: string;
    _rating: number;
    _theme = theme();

    constructor(movie: IMovie) {
        this._name = movie.name;
        this._pic = movie.pic;
        this._desc = movie.desc;
        this._rating = movie.rating;
        this._theme.setRule("border", "solid black 1px").setRule("borderRadius", "10px");
    }

    create() {
        return div(
            h1(this._name),
            img(this._pic, this._name),
            p(this._desc),
            h2(this._rating.toString())
        )
            .width("25em")
            .applyTheme(this._theme);
    }
}

export function movieElement(movie: IMovie) {
    return new MovieElement(movie).create();
}
