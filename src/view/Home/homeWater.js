import React from 'react';

import Products from '../../components/Products/products'
import Checkout from '../../components/Checkout/checkout'
import NavBar from '../../components/Navbar/navbar'
import PropTypes from 'prop-types';

import './home.css'

export default function HomeWater(props) {
    return (
        <div>


            <NavBar
                products={props.products}
                handleShowCheckout={props.handleShowCheckout}
                color={"bg-info"}
                local={"/homefire"}
                link={"Tipo Fogo"}
            />



         
             <h3><small className="text-muted m-3">Pokémon da primeira geração do tipo água</small></h3>
            




            <div className="container-fluid">
                <div className="row d-flex flex-wrap">
                    <div className="col-9">
                        <Products
                            addProduct={props.addProduct}
                            types={"water"}
                            color={"btn-outline-info"}
                        />
                    </div>
                    <div className="col sidebar">
                        <Checkout
                            products={props.products}
                            handleCleanShopCart={props.handleCleanShopCart}
                            handleShowCheckout={props.handleShowCheckout}
                            color={"btn btn-info"}
                        // removeFromCart={propremoveFromCart}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
HomeWater.propTypes = {
    products: PropTypes.array.isRequired,
    handleShowCheckout: PropTypes.func.isRequired,
    handleCleanShopCart: PropTypes.func.isRequired,
    // removeFromCart: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
}
