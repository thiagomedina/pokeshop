
import React from 'react';
import PropTypes from 'prop-types'
import ItemList from './itemList';

export default function Checkout(props) {

    function totalCalculate() {


        if (props.products.length === 0) {
            return '0,00';
        }

        let total = 0;

        props.products.forEach(prod => {
            let price = prod.price.replace(",", ".");
            total += parseFloat(price) * prod.amount;
        })
        return total.toFixed(2).toString().replace(".", ",")
    }


    return (
       
        <div className="jumbotron">
  <h1 className="display-4">Carrinho</h1>
  <p className="lead">Produtos</p>
            <hr className="my-4" />
            <ItemList products={props.products} />
  <span> Total:R$ {totalCalculate()}</span>
  <a className={`btn btn-primary btn-lg ${props.products.lengths === 0 ? 'hidden' : null}`}  href="#" role="button">Finalizar Compra</a>
</div>
   

        //         <div className="btn-group dropleft">
        //             <button type="button" className="btn  " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                 <i className="fas fa-shopping-cart">{props.products.length}</i>
        //                 <strong></strong>
        //             </button>

        //             <div className="dropdown-menu ">
        //                 <h6 className="dropdown-header" ><i className="fas fa-shopping-basket text-center"></i><b> Produtos</b></h6>

        //                 <ShopCartItem products={props.products} />
                        
        //                 <span> Total:R$ {totalCalculate()}</span>

        //                 <a className={` dropdown-item ${props.products.length === 0 ? 'hidden' : null}`} href="#">
        //                 {/* onClick={ () => props.handleShowCheckout(totalCalculate())} */}

        //                     <i className="fas fa-cash-register"></i> Finalizar Compra
        //                 </a>
        //             </div>
        //         </div>
        //     </form>
        // </nav>
    );
}
Checkout.propTypes = {
    products: PropTypes.array.isRequired,
    // handleShowProduct: PropTypes.func.isRequired,
    handleShowCheckout: PropTypes.func.isRequired,
    handleCleanShopCart: PropTypes.func.isRequired


}