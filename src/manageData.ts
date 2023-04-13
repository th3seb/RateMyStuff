import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import { readFileSync } from "fs";

interface Movie {
    movie_id: number;
    name: string;
    img: string;
    description: string;
    rating: number;
}

const app = express();
const port = 3000;
const db = new Database("../../db/ratemystuff.db");

db.pragma("journal_mode = WAL");
let index = 1;

app.use(cors());
app.use(express.json());
app.use(express.static("../../"));

//Functions

//All
app.get("/", (req, res) => {
    res.sendFile("./public/html/index.html", { root: "../../" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//Movies
app.get("/movies", (req, res) => {
    res.send(db.prepare("SELECT * FROM movies").all());
    console.log("Requests: " + index);
    index++;
});

app.post("/movies", (req, res) => {
    let { movie_id, name, img, description, rating }: Movie = req.body;
    db.prepare("Insert into movies (movie_id, name, img, description, rating) Values (?, ?, ?, ?, ?)").run(movie_id, name, img, description, rating);
    console.log("Requests: " + index);
    index++;
    res.end();
});

app.delete("/movies", (req, res) => {
    let { movie_id }: Movie = req.body;
    db.prepare("DELETE FROM movies WHERE movie_id = ?").run(movie_id);
    console.log("Requests: " + index);
    index++;
    res.end();
});

app.get("/movies/:id", (req, res) => {
    let { id } = req.params;
    const html = readFileSync("../../public/html/movie.html", { encoding: "utf-8" });
    res.send(html);
});

app.get("*", (req, res) => {
    res.send("404: Not Found!");
});
