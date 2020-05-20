
import React from 'react';
import PropTypes from 'prop-types'
import ItemList from './itemList';
import './style.css'


export default function Checkout(props) {

    let price = (Math.random() * 10).toFixed(2).replace(".", ",");
    function totalCalculate() {
        if (props.products.length === 0) {
            return '0,00';
        }

        let total = 0;

        props.products.forEach(prod => {
            let price = prod.price.replace(",", ".");
            total += parseFloat(price) * prod.amount;
        })
        return  total.toFixed(2).toString().replace(".", ",")
    }

    return (

        <div>


            <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="BuyModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Obrigado pela compra!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Você ganhou de volta R$: {price}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>




            <h1 className="display-4">Carrinho</h1>
            <p className="lead">Resumo do pedido</p>

            <ItemList products={props.products} />
            <hr className="my-2" />

            <span > Total:R$ {totalCalculate()}</span><br />
            <button className={`btn ${props.color} btn-sm mt-3 ${props.products.length === 0 ? 'hidden' : null}`} href="#" onClick={props.handleCleanShopCart} data-toggle="modal" data-target="#modalExemplo" type="button" >Finalizar Compra</button>
        </div>

    );
}
Checkout.propTypes = {
    products: PropTypes.array.isRequired,
    handleCleanShopCart: PropTypes.func.isRequired,
    // removeFromCart: PropTypes.func.isRequired
    color: PropTypes.string.isRequired


}