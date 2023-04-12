import { Base } from "../framework/base.js";
import { Div } from "../framework/div.js";
import { H1 } from "../framework/headings.js";
import { Img } from "../framework/img.js";
import { Paragraph } from "../framework/p.js";

export function Movie(
    movie_id: string,
    name: string,
    pic: string,
    desc: string,
    rating: number,
    renderType: MovieRenderType = MovieRenderType.Short
) {
    return new MovieElement(movie_id, name, pic, desc, rating, renderType);
}

export class MovieElement extends Base {
    private name: string;
    private pic: string;
    private desc: string;
    private rating: number;
    private movie_id: string;
    private renderType: MovieRenderType;

    constructor(movie_id: string, name: string, pic: string, desc: string, rating: number, renderType: MovieRenderType = MovieRenderType.Short) {
        super("div");
        this.movie_id = movie_id;
        this.name = name;
        this.pic = pic;
        this.desc = desc;
        this.rating = rating;
        this.renderType = renderType;
        renderType === MovieRenderType.Short
            ? this.render(movie_id, name, pic, desc, rating)
            : this.renderFullMovie(movie_id, name, pic, desc, rating);
    }

    protected render(movie_id: string, name: string, pic: string, desc: string, rating: number) {
        let shortDesc = "";
        if (desc.length > 150) {
            if (desc.charAt(149) === " ") shortDesc = desc.substring(0, 149) + "...";
            else shortDesc = desc.substring(0, 150) + "...";
        } else shortDesc = desc;

        const titleDiv = H1(name).addStyle("margin", "0 auto").addStyle("font-size", "1.25em");
        const shortDescDiv = Paragraph(shortDesc).addStyle("margin-top", "5px").addStyle("margin-bottom", "5px");
        const ratingDiv = Paragraph(`Rating: ${rating}/10`).addStyle("margin", "0 auto").addStyle("text-decoration", "underline");

        const descriptionDiv = Div(titleDiv, shortDescDiv, ratingDiv)
            .addAttribute("class", "description")
            .addStyle("position", "absolute")
            .addStyle("top", "50%")
            .addStyle("left", "50%")
            .addStyle("transform", "translate(-50%, -50%)");

        const img = Img(pic, name).addStyle("width", "206px").addStyle("height", "310px").addStyle("transition", "opacity 0.2s");

        this.appendChildren(img, descriptionDiv.addStyle("display", "none"))
            .addStyle("position", "relative")
            .addStyle("text-align", "center")
            .addStyle("margin", "10px")
            .addStyle("width", "206px")
            .addStyle("height", "310px")
            .addStyle("display", "inline-block")
            .addAttribute("class", "movieElement")
            .addAttribute("id", movie_id)
            .addEventListener("mouseover", () => {
                descriptionDiv.addStyle("display", "block");
                img.addStyle("opacity", "0.1");
            })
            .addEventListener("mouseout", () => {
                descriptionDiv.addStyle("display", "none");
                img.addStyle("opacity", "1");
            });
    }

    protected renderFullMovie(movie_id: string, name: string, pic: string, desc: string, rate: number) {
        const title = H1(name).addStyle("color", "white");
        const description = Paragraph(desc).addStyle("color", "white");
        const rating = Paragraph(`Rating: ${rate}/10`).addStyle("color", "white");
        const img = Img(pic, name).addStyle("width", "206px").addStyle("height", "310px");

        this.appendChildren(title, img, description, rating);
    }

    getName(): string {
        return this.name;
    }
    getImg(): string {
        return this.pic;
    }
    getDesc(): string {
        return this.desc;
    }
    getRating(): number {
        return this.rating;
    }
    getMovieId(): string {
        return this.movie_id;
    }
}

export enum MovieRenderType {
    Full,
    Short
}
