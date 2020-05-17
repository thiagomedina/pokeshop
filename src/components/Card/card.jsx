import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
  
       
                <div className="card m-2">
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
               
        // <div class="container-fluid">
        // <div class="produtos d-flex flex-wrap">
      
        //   <!--produto-->
        //   <div class="card m-2">
        //     <img class="card-img-top" src="https://i.ibb.co/wW5c58Z/COBALT.jpg" alt="">
        //     <div class="card-body">
        //       <p class="card-title">Cod: GM2003</p>
        //       <h6 class="">Mod: COBALT</h6>
        //     </div>
        //   </div>


    )
}

