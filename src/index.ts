import { getAllMovies, IMovie } from "./db.js";
import { img } from "./img.js";
import * as WebUI from "./WebUI/dist/index.js";

function moviePage() {
    const movieArray = getAllMovies();
    const cardTheme = WebUI.theme();
    cardTheme.setRule("border", "solid black 2px");
    const page = WebUI.div(
        WebUI.h1("Deine").color("#000000"),
        createMovieElement(movieArray[0])
    );

    function createMovieElement(movie: IMovie) {
        return WebUI.div(
            WebUI.h1(movie.name),
            img(movie.pic, 300, 300),
            WebUI.p(movie.desc),
            WebUI.h2(movie.rating.toString())
        ).applyTheme(cardTheme);
    }
    document.body.append(page.HTML);
}

moviePage();
