import React, { useState, useEffect } from 'react';

import Products from '../../components/Products/products'
import Checkout from '../../components/Checkout/checkout'
import NavBar from '../../components/Navbar/navbar'

export default function Home() {
    const [shopCart, setShopCart] = useState({ product: [] });
    const [showProduct, setShowProduct] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);
    const [total, setTotal] = useState('0,00');

    function addProduct(product) {
        const objShopCart = Object.assign({}, shopCart)
        let newProduct = true;
        objShopCart.product.forEach((prod, id) => {
            if (prod.name === product.name) {
                objShopCart.product[id].amount++;
                newProduct = false
            }

            if (newProduct) {
                objShopCart.product.push({
                    name: product.name, price: product.price, 
                    amount: 1
                })
            }
        })




        setShopCart(objShopCart);
    }

    return (
        <div>
            <div>
                <NavBar />
                <Products
                    
                    visible={showProduct}
                    addProduct={addProduct}
                />
                <Checkout />
            </div>
        </div >
    );
}