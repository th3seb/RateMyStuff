export interface IMovie {
    name: string;
    pic: string;
    desc: string;
    rating: number;
}

const fakeDB: { movies: IMovie[] } = {
    movies: [
        {
            name: "Spidr Man",
            pic: "helo",
            desc: "Web",
            rating: 5
        },
        {
            name: "Mtrix",
            pic: "https://images-ext-2.discordapp.net/external/89SFGYfSBL-05DtiZLHiCufnfUM2kSoxZ_NdZU2JIOg/https/cdn.pixabay.com/photo/2020/07/02/04/31/matrix-5361690__340.png",
            desc: "Banana",
            rating: 1
        }
    ]
};

export function getAllMovies() {
    return fakeDB.movies.sort((m1, m2) => (m1.rating > m2.rating ? 1 : -1));
}
