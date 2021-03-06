import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar(props) {

    return (
        <nav className={` styleCustom navbar justify-content-between   ${props.color}`}>
            <div>
                <img className="stylePokeball" src="https://img.icons8.com/plasticine/100/000000/pokeball.png" />
                <a className="navbar-brand styleBrand align-middle">PokeShop</a>
                <Link className=" text-white btn btn-outline-ligth my-2 mx-2 my-sm-0" to={`${props.local}`}>{`${props.link}`}</Link>
            </div>




            <form className="form-row col-md-4">
                <input type="text" className="form-control text-center" placeholder="Pesquisar por um pokémon..." />

            </form>
        </nav>
    );
}
NavBar.propTypes = {
    products: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired



}