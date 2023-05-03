
import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import { getProductoById } from '../../AsyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
      getProductoById(itemId)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])
    
    return (
        <div className='contenedor-detalles'>
            <ItemDetail {...producto}/>
        </div>
    )
}
