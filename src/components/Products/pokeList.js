import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../Card/card';
import PropTypes from 'prop-types';


export default function PokeList(props) {

    const [pokemon, setPokemon] = useState([]);

    async function loadApi() {

        const response = await api.get();

        const pokes = response.data.results;
        const arrayPoke = [];

        for (let poke of pokes) {
            const res = await api.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            let type = res.data.types[0].type.name;

            if (type == 'water') {
                poke.price = (Math.random() * 100).toFixed(2).replace(".", ",");
                arrayPoke.push(poke)
            }
        }

        console.log(arrayPoke)

        setPokemon(arrayPoke)

    }

    useEffect(() => {
        loadApi();
    }, []);

    function handleBuy(event, product) {
        event.preventDefault();
        props.addProduct(product);
        props.showMessage(product);
    }

    return (
        <div>
           
            <div className="container  mt-4">
                <div className="d-flex   justify-content-around flex-wrap">

                    {pokemon.map((data, id) => {

                        let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
                        return (

                            <Card key={data.name} name={data.name} image={picture} price={data.price} clickFunction={(event) => handleBuy(event, data)} />
                        )
                    })}


                </div>
            </div>

        </div >
    );
}
PokeList.propTypes = {
    addProduct: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired

}
