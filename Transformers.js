import React, { useState, useEffect } from 'react';

function Transformers () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [toggle, setToggle] = useState (false)

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=2469208&t=Transformers+&plot=full&r=json')
            .then(res => res.json())
            .then(
                (result) => {
                setIsLoaded(true)
                setItems(result)
                console.log(result.Title)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            })
    }, [])
    function showPoster () {
        if(toggle === false){
            document.getElementById('TFMR').style.display = "block"
            setToggle(true)
        }
        else {
            document.getElementById('TFMR').style.display = "none"
            setToggle(false)
        }
       }
    return (
        <article className={"A1"}>
                    <h2>{items.Title}</h2>
                    <br/>
                    <img  src = {items.Poster}></img>
                    <p className ="plot" id ={"TFMR"}> {items.Plot}</p>
                    <button onClick ={showPoster}>Clickable</button>
                </article>
    )
}

export default Transformers