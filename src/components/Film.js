const Film = ({name, url}) => {
    return(
        <>
            <li><a href={url} rel="external" target="_blank" rel="noreferrer">{name}</a></li>
        </>
    )
}

export default Film;