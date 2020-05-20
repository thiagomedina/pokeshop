import React, { useState } from 'react'
import PokeList from './pokeList';
import PropTypes from 'prop-types'
import './products.css'



export default function Products(props) {

    const [showMsg, setShowMsg] = useState(false);
    const [product, setProduct] = useState('');

    function showMessage(product) {
        setShowMsg(true);
        setProduct(product.name);
        setTimeout(() => {
            setShowMsg(false)
        }, 2000)
    }

    return (
        
            <div >
                {
                    showMsg ? <div className="alert alert-success mt-2" role="alert">
                        <b>{product}</b> adicionado com sucesso ao carrinho!
                      </div> : null
            }
            
                <PokeList
                    showMessage={showMessage}
                    addProduct={props.addProduct}
                    types={props.types}
                    color={props.color}
                />

            </div>
    );
}
Products.propTypes = {
    addProduct: PropTypes.func.isRequired,
    types: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
