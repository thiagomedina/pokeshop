import React, { useState } from 'react';
import { Route } from 'react-router-dom';


import HomeFire from '../view/Home/homeFire'
import HomeWater from '../view/Home/homeWater';


export default function Core() {
    const [shopCart, setShopCart] = useState({ products: [] });
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



        setShopCart(objShopCart);
    }

    // function removeFromCart(product) {
    //     const cartItems = shopCart.products.slice();
    //     setShopCart({
    //         cartItems: cartItems.filter((x) => x.name !== product.name),
    //     });
    // }


    function handleShowCheckout(total) {

        setTotal(total);

    }

    function handleCleanShopCart() {
        setShopCart({ products: [] });
    }
    return (
        <div>
            <Route exact path="/" render={(props) => <HomeWater{...props}
             products={shopCart.products}
             handleShowCheckout={handleShowCheckout}
             addProduct={addProduct}
             handleCleanShopCart={handleCleanShopCart}
            />} />

            <Route exact path="/homefire" render={(props) => <HomeFire{...props}
            
            products={shopCart.products}
            handleShowCheckout={handleShowCheckout}
            addProduct={addProduct}
            handleCleanShopCart={handleCleanShopCart}
            
            />} />
            

          
            

        </div>
    );
}