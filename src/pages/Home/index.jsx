import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import axios from 'axios'
import PokeList from '../../components/PokeList/index'

export default function Home() {

    return (
        <div>
            <div>
                <PokeList />
            </div>
        </div >
    );
}