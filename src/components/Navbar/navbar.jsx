import React from 'react';
import '../../assets/pokeball.svg'

export default function Menu() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">PokeShop <i class="fa-pokeball"></i></a>
           
        <form className="form-inline ">
          <input className="form-control mr-sm-2" type="search" placeholder="Digite o nome do seu pokemon favorito..." aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Procurar</button>
            </form>
            
      </nav>
    );
}