import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import { compareSync, hashSync } from "bcrypt";
import session from "express-session";
import { MySession } from "./types";

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

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    })
);
app.use(express.json());
app.use(express.static("."));
app.use(session({ secret: "subscribe", resave: false, saveUninitialized: false, cookie: { maxAge: 60 * 1000 * 10 } }));

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
    if (pwdb !== undefined && compareSync(password, pwdb.password)) {
        const ses = req.session as MySession;

        ses.user = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as {
            username: string;
            password: string;
        };
        res.send(ses.cookie);
    } else {
        res.send("false");
    }
});

app.get("/login/check", (req, res) => {
    const ses = req.session as MySession;
    if (ses.user) {
        res.send({ loggedIn: true, user: ses.user });
    } else {
        res.send({ loggedIn: false });
    }
});

//Logout
app.get("/logout", (req, res) => {
    const ses = req.session as MySession;
    ses.destroy((err) => {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("http://localhost:3000/");
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

//Likes
app.post("/movies/liked", (req, res) => {
    const ses = req.session as MySession;
    if (ses.user) {
        const pieceId = req.body.p_id;
        const liked = db
            .prepare("SELECT liked FROM likes l join users u on u.username=l.username WHERE l.username=? and l.p_id=? and l.t_id=0")
            .get(ses.user.username, pieceId) as { liked: number };

        if (liked === undefined) db.prepare("INSERT INTO likes (username, p_id, t_id, liked) VALUES (?, ?, 0, 1)").run(ses.user.username, pieceId);
        else {
            if (liked.liked === 1) {
                db.prepare("UPDATE likes SET liked=0 WHERE username=? and p_id=? and t_id=0").run(ses.user.username, pieceId);
                res.send("false");
                return;
            } else db.prepare("UPDATE likes SET liked=1 WHERE username=? and p_id=? and t_id=0").run(ses.user.username, pieceId);
        }
        res.send("true");
    } else {
        res.send("false");
    }
});

app.get("/movies/liked/:id", (req, res) => {
    const ses = req.session as MySession;
    if (ses.user) {
        const pieceId = req.params.id;
        const liked = db
            .prepare("SELECT liked FROM likes l join users u on u.username=l.username WHERE l.username=? and l.p_id=? and l.t_id=0")
            .get(ses.user.username, pieceId) as { liked: number };

        if (liked === undefined || liked.liked === 0) {
            res.send("false");
        } else res.send("true");
    }
});

//My List
app.post("/movies/myList", (req, res) => {});

app.get("*", (req, res) => {
    res.sendFile("./public/html/error.html", { root: root });
});
