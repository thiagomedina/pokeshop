import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function PokeList() {

    const [pokemon, setPokemon] = useState([]);
    const [pokeDetails, setPokeDetails] = useState([]);

    async function loadApi() {
        const response = await api.get();
        response.data.results.map(e => {
            const res = api.get(e.name)
                .then(res => {
                    const det = res.data;
                    setPokeDetails(det);
                })
        })

        setPokemon(response.data.results);

    }



    useEffect(() => {
        loadApi();
    },[]);

    return (
        <div>
            <div>
                {pokemon.map((data, id) => {
              
                    let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
                    return <tr><td>{data.name}</td><td>
                        <img src={picture} /></td></tr>
                   
                })}            
               
        </div>
        </div >
    );
}
