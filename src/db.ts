export interface IMovie {
    name: string;
    pic: string;
    desc: string;
    rating: number;
}

const fakeDB: { movies: IMovie[] } = {
    movies: [
        {
            name: "Spider Man",
            pic: "https://m.media-amazon.com/images/I/51ABaqM-xWL._AC_.jpg",
            desc: "Spider-Man is an old Movie",
            rating: 4
        },
        {
            name: "Matrix",
            pic: "https://m.media-amazon.com/images/I/51XE3ed1dkL._AC_SY445_.jpg",
            desc: "Matrix the Movie",
            rating: 5
        }
    ]
};

export function getAllMovies() {
    return fakeDB.movies.sort((m1, m2) => (m1.rating > m2.rating ? 1 : -1));
}
