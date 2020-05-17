import React, { useState, useEffect } from 'react';

import Products from '../../components/Products/products'
import Checkout from '../../components/Checkout/checkout'
import Menu from '../../components/Menu/menu'

export default function Home() {
    const [shopCard, setShopCard] = useState({ product: [] });
    const [showProduct, setShowProduct] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);
    const [total, setTotal] = useState('0,00');

    return (
        <div>
            <div>
                <Menu />
                <Products />
                <Checkout />
            </div>
        </div >
    );
}