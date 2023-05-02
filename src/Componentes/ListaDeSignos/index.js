import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

export default function ListaDeSignos(){
    return(
        <div className='lista'>
            <Titulo />
            <div>
                <ItemLista />
            </div>
        </div>
    );
}