import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../Card'

export default function PokeList() {

    const [pokemon, setPokemon] = useState([]);
    const [pokeDetails, setPokeDetails] = useState([]);
    const [img, setImg] = useState([]);

    async function loadApi() {
        const response = await api.get();

        response.data.results.map(e => {

            const res = api.get(`https://pokeapi.co/api/v2/pokemon/${e.name}/`)
                .then(res => {
                    setPokeDetails(res.data)
                    setImg(res.data.sprites)

                })
        })
        setPokemon(response.data.results);
    }
    useEffect(() => {
        loadApi();
    }, []);

    return (
        <div>
            <div>

                {pokemon.map(e => <li>{e.name}</li>)}
                {pokeDetails.map(e => <li>{e.name}</li>)}



            </div>
            {/* {pokemon.map((data, id) => {
          
                              let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
          
                              return <Card name={data.name} image={picture} />
                          })} */}
        </div >
    );
}
