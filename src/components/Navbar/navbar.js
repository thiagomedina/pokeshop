import React from 'react';
import '../../assets/pokeball.svg'
import PropTypes from 'prop-types'
import ShopCartItem from './shopCartItem'

export default function NavBar(props) {

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
        <nav className="navbar navbar-ligth bg-info justify-content-between">
            <a className="navbar-brand">PokeShop</a>

            <form className="form-inline ">
                <input className=" form-control px-5 " type="search" placeholder="Digite o nome do seu pokemon favorito..." aria-label="Search" />
                <button className="btn btn-outline-ligth my-2 mx-2 my-sm-0 " type="submit" >Procurar</button>



                

                <div className="btn-group dropleft">
                    <button type="button" className="btn  " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className=" fas fa-shopping-basket">{props.products.length}</i>
                        <strong></strong>
                    </button>

                    <div className="dropdown-menu ">
                        <h6 className="dropdown-header" ><i className="fas fa-shopping-basket text-center"></i><b> Produtos</b></h6>

                        <ShopCartItem products={props.products} />
                        
                        <span> Total:R$ {totalCalculate()}</span>

                        <a className={` dropdown-item ${props.products.length === 0 ? 'hidden' : null}`} href="#">
                        onClick={ () => props.handleShowCheckout(totalCalculate())}

                            <i className="fas fa-cash-register"></i> Finalizar Compra
                        </a>
                    </div>
             </div> 
            
            
            
            </form>
        </nav>
    );
}
NavBar.propTypes = {
    products: PropTypes.array.isRequired,
    // handleShowProduct: PropTypes.func.isRequired,
    handleShowCheckout: PropTypes.func.isRequired

}