import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css';
import { Button } from 'react-bootstrap';
import { BsCartDashFill } from "react-icons/bs";

export const CartItem = ({nombre, imagen, precio, cantidad, id}) => {

  const { removerItem } = useContext (CartContext)


  return (
    <div className='container-cartItem'>
        <img src={imagen} alt='imagenProducto' />
        <h4 className='subt-carrito'>Variedad: {nombre}</h4>
        <div className='subt-carrito'>Precio: ${precio}</div>
        <div className='subt-carrito'>Cantidad: {cantidad}</div>        
        <div className='subt-carrito'>Subtotal: ${precio*cantidad}</div>    
        <Button variant='warning' className='boton-eliminar' onClick={()=> removerItem(id)}> Remover ítem<BsCartDashFill/></Button>
    </div>
  )
}