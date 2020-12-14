import {useState} from "react";

import FilmList from "../components/FilmList";
import ViewMoreFilms from "../components/ViewMoreFilms";

const FilmBox = () => {
    const initialStateFilms = [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
    ]

    const initialStateUpComing = [
        {
            id: 1,
            url: "https://www.imdb.com/calendar/?region=gb",
        }
    ]

      const [films, setFilms] = useState(initialStateFilms);

      const [upComingFilms, setUpComingFilms] = useState(initialStateUpComing);

    return (
        <>
            <h1>Upcomining Film Releases for UK</h1>
            <hr />
            <FilmList films={films}/>
            <hr />
            <ViewMoreFilms upComingFilms={upComingFilms} />
        </>
    );
}

export default FilmBox;