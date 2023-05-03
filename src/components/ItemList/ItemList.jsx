
import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({productos}) => {
  return (
    <div className='ListaProductos'>
        {productos.map(producto => <Item key={producto.id} {...producto}/>)}
    </div>
  )
}
