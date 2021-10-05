import React, { useState } from 'react';

function Spotlight ({movie}){
    const [toggle, setToggle] = useState (false)


    function showPoster () {
        if(toggle === false){
            document.getElementById('desc').style.display = "block"
            setToggle(true)
        }
        else {
            document.getElementById('desc').style.display = "none"
            setToggle(false)
        }
       }

    return (
        <article className={"spotLight"}>
        <h2>{movie.Title}</h2>
        <br/>
        <img id = "img" alt = "" src = {movie.Poster}></img>
        <p className ="plot" id ={"desc"}> {movie.Plot}</p>
        <br/>
        <button onClick ={showPoster}>Clickable</button>
    </article>
    )
}

export default Spotlight