import React from 'react'
import './Card.css'
export default function  Card(props){
    return (

        <div className="card card-size" >
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
            </div>
        </div>


    )
}

