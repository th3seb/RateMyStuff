import { Movie, MovieRenderType } from "./components/movieElement.js";
import { HTML } from "./framework/base.js";
import { Div } from "./framework/div.js";
import { MovieHandler } from "./movieHandler.js";

const id = document.querySelector("title").innerHTML;
const movieHandler = new MovieHandler();

async function onStart() {
    const movieShort = await movieHandler.getMovieOnlyByID(id);
    const movie = Movie(
        movieShort.getMovieId(),
        movieShort.getName(),
        movieShort.getImg(),
        movieShort.getDesc(),
        movieShort.getRating(),
        MovieRenderType.Full
    );
    document.querySelector("title").innerHTML = movie.getName();
    const div: HTML = Div(movie);
    const body = new HTML("body");
    body.appendChild(div);
    document.body = body.getComponent();
    body.addStyle("background-color", "rgb(44, 44, 44)");
}

onStart();
