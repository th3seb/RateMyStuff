import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import { compareSync, hashSync } from "bcrypt";

interface Movie {
    movie_id: number;
    name: string;
    img: string;
    description: string;
    rating: number;
}

const app = express();
const port = 3000;
const db = new Database("./db/ratemystuff.db");
const root: string = ".";
db.pragma("journal_mode = WAL");
let index = 1;

app.use(cors());
app.use(express.json());
app.use(express.static("."));

//Functions

//All
app.get("/", (req, res) => {
    res.sendFile("./public/html/index.html", { root: root });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//Login
app.get("/login", (req, res) => {
    res.sendFile("./public/html/login.html", { root: root });
});

app.post("/login", (req, res) => {
    let { username, password }: { username: string; password: string } = req.body;
    username = username.toLowerCase();
    let pwdb: { password: string } = db.prepare("SELECT password FROM users WHERE username = ?").get(username) as { password: string };
    pwdb !== undefined && compareSync(password, pwdb.password) ? res.redirect("http://localhost:3000/") : res.send("false");
});

//Register
app.get("/register", (req, res) => {
    res.sendFile("./public/html/register.html", { root: root });
});

app.post("/register", (req, res) => {
    let { username, password }: { username: string; password: string } = req.body;
    username = username.toLowerCase();
    let encryptedPassword = hashSync(password, 10);
    db.prepare("Insert into users (username, password) Values (?, ?)").run(username, encryptedPassword);
    res.redirect("http://localhost:3000/");
});

app.post("/register/checkUsername", (req, res) => {
    let { username }: { username: string } = req.body;
    username = username.toLowerCase();
    db.prepare("SELECT username FROM users WHERE username = ?").get(username) === undefined ? res.send("true") : res.send("false");
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
    if (db.prepare("SELECT * FROM movies WHERE movie_id = ?").get(id) === undefined) {
        res.redirect("http://localhost:3000/error?id=404");
    } else res.sendFile("./public/html/movie.html", { root: root });
});

app.get("*", (req, res) => {
    res.sendFile("./public/html/error.html", { root: root });
});
