import {useState} from "react";

import FilmList from "../components/FilmList";
import ViewMoreFilms from "../components/ViewMoreFilms";

const FilmBox = () => {


    return (
        <>
            <h1>Films</h1>
            <FilmList />
            <ViewMoreFilms />
        </>
    );
}

export default FilmBox;