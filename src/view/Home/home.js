import React, { useState, useEffect } from 'react';

import Products from '../../components/Products/products'
import Checkout from '../../components/Checkout/checkout'
import NavBar from '../../components/Navbar/navbar'
import './home.css'

export default function Home() {
    const [shopCart, setShopCart] = useState({ products: [] });
    const [showProduct, setShowProduct] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);
    const [total, setTotal] = useState('0,00');




    function addProduct(product) {
        const objShopCart = Object.assign({}, shopCart)
        let newProduct = true;
        objShopCart.products.forEach((prod, id) => {

            if (prod.name === product.name) {
                objShopCart.products[id].amount++;
                newProduct = false
            }
        })
        if (newProduct) {
            objShopCart.products.push({
                name: product.name, price: product.price,
                amount: 1
            })
        }


        console.log(product)
        console.log(shopCart.products)
        setShopCart(objShopCart);
    }

    function removeFromCart(product) {
        const cartItems = shopCart.products.slice();
        setShopCart({
            cartItems: cartItems.filter((x) => x.name !== product.name),
        });
    }

   

    function handleShowCheckout(total) {
    
        setTotal(total);

    }

    function handleCleanShopCart() {
        setShopCart({ products: [] });
    }
    return (
        <div>


            <NavBar
                products={shopCart.products}
                handleShowCheckout={handleShowCheckout}
            />
            <div className="container-fluid">
                <div className="row d-flex flex-wrap">
                <div className="col-9">
                    <Products
                        visible={showProduct}
                        addProduct={addProduct}
                    />
                </div>
                <div className="col sidebar">
                    <Checkout
                            products={shopCart.products}
                            handleCleanShopCart={handleCleanShopCart}
                            handleShowCheckout={handleShowCheckout}
                            removeFromCart={removeFromCart}
                    />
                    </div>
                    </div>
            </div>
        </div >
    );
}