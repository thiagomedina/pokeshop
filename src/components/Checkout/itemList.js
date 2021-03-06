import React from 'react'
import PropTypes from 'prop-types'


export default function ItemList(props) {

    function render() {
      if (props.products.length === 0) {
        return (
          <span className="dropdown-item">Carrinho Vazio</span>
        );
      }
      
      const item = props.products.map(prod => 
        
         <div>
        <hr className="my-4" />
          <span className="" key={prod.nome}>
            {prod.name} - {prod.amount} x {prod.price}
          </span>
          </div>
      
      );
      return item;
    }
  
    return render();
  
  }
  
  ItemList.propTypes = {
    products: PropTypes.array.isRequired,
    // removeFromCart: PropTypes.func.isRequired
  }