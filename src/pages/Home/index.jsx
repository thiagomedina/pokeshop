import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import axios from 'axios'

export default function Home() {

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
    });

    return (
        <div>
            <div>
                {pokemon.map(e => (
                    <li key={e.name}>
                        <strong>{e.name}</strong><br />
                    </li>
                ))}
            </div>
        </div>
    );
}