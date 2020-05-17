import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
  
        <div className="flex">
            <div className="row">
                <div className="row">
                    <img src={props.image}  alt="Imagem do Evento" />
                    <div className="text-center">
                        <h5>{props.name}</h5>
                    </div>
                    <div className="text-center">
                        <span>{props.price}</span>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-success">comprar</button>
                    </div>
                    </div>
                </div>
            </div>


    )
}

