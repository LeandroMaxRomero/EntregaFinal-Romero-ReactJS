import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({nombre, precio, cantidad, id}) => {

  const { removerItem } = useContext (CartContext)


  return (
    <div className='container principal'>
      <section className='cartitem'>
        <h4>{nombre}</h4>
        <div>Precio: ${precio}</div>
        <div>Cantidad: {cantidad}</div>        
        <div>Subtotal: ${precio*cantidad}</div>    
        <button onClick={()=> removerItem(id)} className='boton'> Remover </button>
      </section>
    </div>
  )
}