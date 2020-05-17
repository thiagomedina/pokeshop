import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../Card/card';
import PropTypes from 'prop-types';

export default function PokeList(props) {

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

    function handleBuy(event, product) {
        event.preventDefault();
        props.addProduct(product);
        props.showMessage(product);
    }

    return (
        <div>

            <div className="container mt-4">
                <div className="d-flex flex-wrap">

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
