import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../Card/card';
import Spinner from '../Spinner/spinner'
import PropTypes from 'prop-types';


export default function PokeList(props) {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadApi() {

        const response = await api.get();

        const pokes = response.data.results;
        const arrayPoke = [];
        let value = props.types

        for (let poke of pokes) {
            const res = await api.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
            let type = res.data.types[0].type.name;
            if (type === value) {

                poke.sprite = res.data.sprites.back_default;
                poke.price = (Math.random() * 100).toFixed(2).replace(".", ",");
                arrayPoke.push(poke)
            }
        }
        setPokemon(arrayPoke);
        setLoading(false);

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


            {
                loading
                    ?
                    <Spinner />
                    :
                    <div className="container  mt-4">
                        <div className="d-flex   justify-content-around flex-wrap">

                            {pokemon.map((data) => {
                                return (
                                    <Card key={data.name} name={data.name} image={data.sprite} color={props.color} price={data.price} clickFunction={(event) => handleBuy(event, data)} />
                                )
                            })}
                        </div>
                    </div>
            }

        </div >
    );
}
PokeList.propTypes = {
    addProduct: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired,
    types: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired

}
