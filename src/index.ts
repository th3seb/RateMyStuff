import { getAllMovies, IMovie } from "./db.js";
import * as WebUI from "./components/WebUI/dist/index.js";
import { header } from "./components/header.js";
import { movieElement } from "./components/movieElement.js";
import { spacerTop } from "./components/spacerTop.js";

function moviePage() {
    const movieArray = getAllMovies();
    const page = WebUI.div(
        header(),
        spacerTop(),
        WebUI.div(movieElement(movieArray[0]), movieElement(movieArray[1]))
    );
    document.body.append(page.HTML);
}

moviePage();
