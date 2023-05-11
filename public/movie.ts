import { Movie, MovieRenderType } from "./components/movieElement.js";
import { HTML } from "./framework/base.js";
import InButton from "./framework/button.js";
import Div from "./framework/div.js";
import { checkSession } from "./lib.js";
import { MovieHandler } from "./movieHandler.js";

const id = window.location.href.split("/").pop();
const movieHandler = new MovieHandler();

async function onStart() {
    const movieShort = await movieHandler.getMovieOnlyByID(id);
    if (movieShort === null) {
        window.location.href = "http://localhost:3000/error?404";
    }

    const loginStatus = await checkSession();
    let like: string;
    if (loginStatus.loggedIn) {
        like = await (
            await fetch(`http://localhost:3000/movies/liked/${id}`, {
                method: "GET"
            })
        ).text();
    }
    let liked = like === "true" ? "Liked" : "Not Liked";
    const likeButton = InButton(liked);
    likeButton.addEventListener("click", async () => {
        console.log("Clicked");

        liked =
            (await (
                await fetch(`http://localhost:3000/movies/liked`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        p_id: id
                    })
                })
            ).text()) === "true"
                ? "Liked"
                : "Not Liked";

        likeButton.addAttribute("value", liked);
    });

    const movie = Movie(
        movieShort.getMovieId(),
        movieShort.getName(),
        movieShort.getImg(),
        movieShort.getDesc(),
        movieShort.getRating(),
        MovieRenderType.Full
    );
    document.querySelector("title").innerHTML = movie.getName();
    const div: HTML = loginStatus.loggedIn ? Div(likeButton, movie) : Div(movie);
    const body = new HTML("body");
    body.appendChild(div);
    document.body = body.getComponent();
    body.addStyle("background-color", "rgb(44, 44, 44)");
}

onStart();
