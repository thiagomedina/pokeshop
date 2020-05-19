
import React from 'react';
import PropTypes from 'prop-types'
import ItemList from './itemList';
import './style.css'


export default function Checkout(props) {

    function totalCalculate() {
        if (props.products.length === 0) {
            return '0,00';
        }

        let total = 0;

        props.products.forEach(prod => {
            let price = prod.price.replace(",", ".");
            total += parseFloat(price) * prod.amount;
        })
        return total.toFixed(2).toString().replace(".", ",")
    }
    return (

        <div className="">
            <h1 className="display-4">Carrinho</h1>
            <p className="lead">Resumo do pedido</p>

            <ItemList products={props.products}/>
            <hr className="my-2" />

            <span > Total:R$ {totalCalculate()}</span><br />
            <a className={`btn btn-primary btn-sm mt-3 ${props.products.length === 0 ? 'hidden' : null}`} href="#"  onClick={props.handleCleanShopCart} >Finalizar Compra</a>
        </div>

    );
}
Checkout.propTypes = {
    products: PropTypes.array.isRequired,
    handleCleanShopCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired


}