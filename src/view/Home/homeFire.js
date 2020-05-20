import React from 'react';

import Products from '../../components/Products/products'
import Checkout from '../../components/Checkout/checkout'
import NavBar from '../../components/Navbar/navbar'
import './home.css'
import PropTypes from 'prop-types'

export default function HomeFire(props) {

    return (
        <div>


        <NavBar
            products={props.products}
                handleShowCheckout={props.handleShowCheckout}
                color={"bg-danger"}
                local={"/"}
                link={"Tipo Água"}
        />

<h3><small class="text-muted m-3">Pokémon da primeira geração do tipo fogo</small></h3>

        <div className="container-fluid">
            <div className="row d-flex flex-wrap">
                <div className="col-9">
                    <Products
                        addProduct={props.addProduct}
                            types={"fire"}
                            color={"btn-outline-danger"}
                    />
                </div>
                <div className="col sidebar">
                    <Checkout
                        products={props.products}
                        handleCleanShopCart={props.handleCleanShopCart}
                            handleShowCheckout={props.handleShowCheckout}
                            color={"btn btn-danger"}
                    // removeFromCart={propremoveFromCart}
                    />
                </div>
            </div>
        </div>
    </div >
    );
}
HomeFire.propTypes = {
    products: PropTypes.array.isRequired,
    handleShowCheckout: PropTypes.func.isRequired,
    handleCleanShopCart: PropTypes.func.isRequired,
    // removeFromCart: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,


}
