import Lists from './list'
import Explore from './explore'
import Spotlight from './spotlight'
import Button from './button'
import React, { useState } from 'react';

function Header () {
        const [title, setTitle] = useState([]);
        const [items, setItems] = useState([]);

        function getTitle () {
            
            setTitle(document.getElementById('search').value)
            const movieName = title
            const toString = movieName.toString()
            const split = toString.split(' ')
            let fullTitle; 
                if(split[0] === toString){
                   fullTitle = toString 
                }
                else{
                    var i;
                    var first = split[0]
                    for(i = 1; i<split.length; i++)
                    fullTitle = first += "+" + split[i]
                   console.log(fullTitle)

                }

            fetch('http://www.omdbapi.com/?apikey=2469208&t=' + fullTitle + '+&plot=full&r=json')
            .then(res => res.json())
            .then(
                (result) => {
                setItems(result)
                console.log(result)
            },
            (error) => {
                console.log(error)
            })
            console.log(items)
        }
        return (
            <>
                <section className={"loginWrapper"}>
                <Button cName = 'login' text='Sign in'/>
                <Button cName = 'login' text='New User'/>
                <Button cName = 'cKey' text='Member Key'/>
                <Button cName = 'help' text='Contact Us'/>
                </section> 
                <Lists />
                    <input id = "search" type="text" ></input>
                    <button onClick = {getTitle} className={"searchBtn"}>Go</button>
                <Explore />
                <Spotlight movie ={items}/>
            </>
        )
    }


export default Header