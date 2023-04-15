import { HTML } from "./framework/base.js";
import { MovieElement, Movie } from "./components/movieElement.js";
import IMovie, { child } from "./framework/types.js";

export const express: string = "http://localhost:3000/";

export class MovieHandler {
    constructor() {}

    saveMovie(div: HTML, mov_id: string, name: string, image: string, description: string, rating: number) {
        fetch(`${express}movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                movie_id: mov_id,
                name: name,
                img: image,
                description: description,
                rating: rating
            })
        });

        div.appendChild(Movie(mov_id, name, image, description, rating));
    }

    deleteMovie(div: HTML, movie_id: string) {
        fetch(`${express}movies`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                movie_id: movie_id
            })
        });

        if (this.getMovieByID(div, movie_id)) div.removeChild(this.getMovieByID(div, movie_id));
    }

    async callMovie(div: HTML, movie_id: string) {
        const a = document.createElement("a");
        a.href = `${express}movies/${movie_id}`;
        a.click();
    }

    getMovieByName(div: HTML, name: string): MovieElement {
        let children = div.getChildren();
        let childOut: MovieElement | null = null;
        children.forEach((child: child) => {
            if (child instanceof MovieElement) {
                if (child.getName() === name) {
                    childOut = child;
                    return;
                }
            }
        });
        return childOut;
    }

    getMovieByID(div: HTML, movie_id: string): MovieElement {
        let children = div.getChildren();
        let childOut: MovieElement | null = null;
        children.forEach((child: child) => {
            if (child instanceof MovieElement) {
                if (child.getMovieId() === movie_id) {
                    childOut = child;
                    return;
                }
            }
        });
        return childOut;
    }

    async getMovieOnlyByID(movie_id: string): Promise<MovieElement> {
        let children = await this.getMovies();
        let childOut: MovieElement | null = null;
        children.forEach((child: IMovie) => {
            if (child.movie_id === movie_id) {
                childOut = Movie(child.movie_id, child.name, child.img, child.description, child.rating);
                return;
            }
        });
        return childOut;
    }

    async getMovies(): Promise<IMovie[]> {
        const movie = async () => {
            let req = await fetch(`${express}movies`);
            let response = await req.text();
            return response;
        };

        return await JSON.parse(await movie());
    }
}
