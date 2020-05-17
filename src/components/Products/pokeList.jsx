import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../Card/card'

export default function PokeList() {

    const [pokemon, setPokemon] = useState([]);

    async function loadApi() {

        const response = await api.get()

        const data = response.data.results.map(row => {
            return {
                ...row,
                price: (Math.random() * 10).toFixed(2).replace(".", ",")
            }

        })
        setPokemon(data);


    }


    useEffect(() => {
        loadApi();
    }, []);

    return (
        <div>

            <div className="container-fluid">
                <div className="d-flex flex-wrap">

                    {pokemon.map((data, id) => {

                           let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
                         return (

                            <Card key={data.name} name={data.name} image={picture} price={data.price}/>
                        )
                    })}


                </div>
            </div>

        </div >
    );
}
