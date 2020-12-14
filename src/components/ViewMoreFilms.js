const ViewMoreFilms = ({upComingFilms}) => {
    
    const url = upComingFilms[0].url + upComingFilms[0].region;

    return(
        <>
            <a href={url} rel="external" target="_blank" rel="noreferrer">View more upcoming releases</a>       
        </>
    )
}

export default ViewMoreFilms;