import React from 'react'
import './Card.css'

export default function Card(props) {
    return (


        <div className=" card card m-2">
            <img src={props.image} alt="Imagem do Produto" />
            <div className="text-center">
                <h5>{props.name}</h5>
            </div>
            <div>
                <button type="button" className="btn btn-outline-success mb-2" onClick={props.clickFunction}>comprar <span>{`R$ ${props.price}`}</span></button>
            </div>
        </div>


    )
}

