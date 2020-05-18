import React, { useState, useEffect } from 'react';

import Products from '../../components/Products/products'
import Checkout from '../../components/Checkout/checkout'
import NavBar from '../../components/Navbar/navbar'

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

    function handleShowProduct() {
        setShowCheckout(false)
        setShowProduct(true)
    }

    function handleShowCheckout(total) {
        setShowCheckout(true)
        setShowProduct(false)
        setTotal(total);

    }

    return (
        <div>
            <div>
                <NavBar
                    products={shopCart.products}
                    handleShowProduct={handleShowProduct}
                    handleShowCheckout={handleShowCheckout}
                />

                <Products
                    visible={showProduct}
                    addProduct={addProduct}
                />
                <Checkout />
            </div>
        </div >
    );
}