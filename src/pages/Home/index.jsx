import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import axios from 'axios'

export default function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [pokeDetails, setPokeDetails] = useState([]);
    
    async function loadApi() {
        const response = await api.get();
        response.data.results.map(e => {
            const res = api.get(e.name)
            .then(res => {
                const persons = res.data;
                setPokeDetails(persons);
                })
            
        })
        
        
        setPokemon(response.data.results);
        // let details = response.data.results.map(e => e.name);
        
    }
    


    useEffect(() => {
                loadApi();
        });

    return (
        <div>
        <div className="box">
       {pokemon.map(e => (
         <li key={e.id}>
           
               <strong>{e.name}</strong><br />
              
                   
               ))}

         </li>
       ))}
     </div>
        </div>
    );
}