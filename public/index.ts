import { Movie as MovieElement } from "./components/movieElement.js";
import A from "./framework/a.js";
import { HTML } from "./framework/base.js";
import InButton from "./framework/button.js";
import Div from "./framework/div.js";
import InNumber from "./framework/number.js";
import InText, { TextArea } from "./framework/text.js";
import Movie from "./framework/types.js";
import { MovieHandler, express } from "./movieHandler.js";

const div: HTML = Div();
const movieHandler = new MovieHandler();

function onStart() {
    const login = InButton("Login");
    const register = InButton("Register");

    login.addEventListener("click", () => {
        A()
            .addAttribute("href", express + "login")
            .getComponent()
            .click();
    });
    register.addEventListener("click", () => {
        A()
            .addAttribute("href", express + "register")
            .getComponent()
            .click();
    });
    const movies = movieHandler.getMovies();
    movies.then((data) => {
        data.forEach((movie: Movie) => {
            div.appendChild(
                MovieElement(movie.movie_id, movie.name, movie.img, movie.description, movie.rating).addEventListener("click", () => {
                    movieHandler.callMovie(this, movie.movie_id);
                })
            );
        });
    });

    //Save movie
    const saveMovieID = InText();
    const saveMovieTitle = InText();
    const saveMovieImage = InText();
    const saveMovieDesc = TextArea();
    const saveMovieRating = InNumber(5).addAttribute("max", "10").addAttribute("min", "0");
    const saveMovieDiv: HTML = Div(
        InButton("Save Movie").addEventListener("click", () =>
            movieHandler.saveMovie(
                div,
                saveMovieID.getValue(),
                saveMovieTitle.getValue(),
                saveMovieImage.getValue(),
                saveMovieDesc.getValue(),
                parseFloat(saveMovieRating.getValue())
            )
        ),
        saveMovieID,
        saveMovieTitle,
        saveMovieImage,
        saveMovieDesc.addAttribute("rows", "1").addAttribute("cols", "30"),
        saveMovieRating
    ).addStyle("display", "flex");

    //Delete movie
    const deleteMovieTitle = InText();
    const deleteMovieDiv: HTML = Div(
        InButton("Delete Movie").addEventListener("click", () => movieHandler.deleteMovie(div, deleteMovieTitle.getValue())),
        deleteMovieTitle
    ).addStyle("display", "flex");

    const body: HTMLElement | null = document.querySelector("body");
    if (!body) return;

    body.appendChild(Div(login).addStyle("text-align", "right").getComponent());
    body.appendChild(div.getComponent());
    body.appendChild(saveMovieDiv.getComponent());
    body.appendChild(deleteMovieDiv.getComponent());
}

onStart();
