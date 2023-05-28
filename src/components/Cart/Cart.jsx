import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { Nav } from 'react-bootstrap'


export const Cart = () => {

    const { cart, vaciarCart, cantidadTotal, total } = useContext(CartContext)
    
    return (
        <>
        {
            cantidadTotal() === 0
            ?
            <div>
                <h2> No hay items en el carrito </h2>
                <Nav.Link as={Link} to={`/`} > Ir a la tienda de papas </Nav.Link>
            </div>
            :
            <div>
              {cart.map(prod => <CartItem key={prod.id} {...prod}  />)}
              <h3> Total: ${total()} </h3>
              <button onClick={() => vaciarCart()}> Limpiar carrito </button>
              <Link to='/checkout'> Checkout </Link>
          </div>
        }
        </>
          
    )
}