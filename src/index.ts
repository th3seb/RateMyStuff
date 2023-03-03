import { Movie } from "./components/movieElement.js";
import { HTML } from "./framework/base.js";
import { Div } from "./framework/div.js";
import { H1 } from "./framework/headings.js";
import { Paragraph } from "./framework/p.js";
import { Span } from "./framework/span.js";

function onStart() {
    const div: HTML = Div(
        H1("Hello World"),
        Paragraph("This is a paragraph ", Span("ok").addStyle("border", "solid 1px black")).addStyle("color", "red"),
        Div("Test"),
        Movie(
            "The Matrix",
            "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            5
        ),
        Movie(
            "The Matrix Reloaded",
            "https://upload.wikimedia.org/wikipedia/en/b/ba/Poster_-_The_Matrix_Reloaded.jpg",
            "Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.",
            4
        )
    );
    const body: HTMLElement | null = document.querySelector("body");
    if (!body) return;

    body.appendChild(div.getComponent());
}

onStart();
