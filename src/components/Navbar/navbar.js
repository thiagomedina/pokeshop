import React from 'react';
import '../../assets/pokeball.svg'
import PropTypes from 'prop-types'

export default function NavBar(props) {

    return (
        <nav className={`navbar justify-content-between   ${props.color}`}>
            <a className="navbar-brand">PokeShop</a>

            <form className="form-inline ">
                <input className=" form-control px-5 " type="search" placeholder="Digite o nome do seu pokemon favorito..." aria-label="Search" />
                <button className="btn btn-outline-ligth my-2 mx-2 my-sm-0 " type="submit" >Procurar</button>
            </form>
        </nav>
    );
}
NavBar.propTypes = {
    products: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired
    


}