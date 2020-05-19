
import React from 'react'
import PropTypes from 'prop-types'


export default function ShopCartItem(props) {

    function render() {
      if (props.products.length === 0) {
        return (
          <span className="dropdown-item">Carrinho Vazio</span>
        );
      }
      
      const item = props.products.map(prod =>
        <span className="dropdown-item" key={prod.nome}>
          {prod.name} - {prod.amount} x {prod.price}
        </span>
      );
      return item;
    }
  
    return render();
  
  }
  
  ShopCartItem.propTypes = {
    products: PropTypes.array.isRequired
  }
