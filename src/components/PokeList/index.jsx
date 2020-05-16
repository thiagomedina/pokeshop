import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../Card'

export default function PokeList() {

    const [pokemon, setPokemon] = useState([]);
    const [pokeDetails, setPokeDetails] = useState([]);
    const [img, setImg] = useState([]);

    async function loadApi() {

        const response = await api.get()
        setPokemon(response.data.results);

    }
    useEffect(() => {
        loadApi();
    }, []);

    return (
        <div>
            {pokemon.map((data, id) => {

                let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
                return <Card key={data.name} name={data.name} image={picture} />
            })}
        </div >
    );
}
