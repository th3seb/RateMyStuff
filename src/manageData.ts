import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import Movie from "../public/framework/types.js";

const app = express();
const port = 3000;
const db = new Database("../../../db/ratemystuff.db");

db.pragma("journal_mode = WAL");
let index = 1;

app.use(cors());
app.use(express.json());
app.use(express.static("../../../"));

//Functions

//All
app.get("/", (req, res) => {
    res.sendFile("./html/index.html", { root: "../../../" });
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
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../fonts/css/author.css">
        <link rel="stylesheet" href="../css/main.css">
        <script src="../dist/public/movie.js" type="module" defer></script>
        <title>${id}</title>
      </head>
    </html>
  `;
    res.send(html);
    //res.sendFile(`./html/movie.html` + `?id=${id}`, {  root: "../../../",headers: {"Content-Type": "text/html"},query: { id: id }});
});

app.get("*", (req, res) => {
    res.send("404: Not Found!");
});
