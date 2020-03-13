import React, {useState,useEffect} from 'react';
import axios from "axios"
import './App.css';

function Shop() {
    useEffect(()=>{
        fetchitems();
    },[]);

    let [items,setitems]=useState([])

    const fetchitems=async()=>{
        const data=await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=374c978e327ab1a65801f4731c336115&page=1&language=en-US&sort_by=release_date&page=2"
        );
        const items=await data.data.results;
        const v=items.results;
        console.log(items);
        setitems(items.results);

    }



    return (
        <div className="App">
            {v.map(item=>(
                <h1>{item.title}</h1>
            ) )}

        </div>
    );
}

export default Shop;
