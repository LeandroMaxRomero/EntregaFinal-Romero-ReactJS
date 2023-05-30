import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { Button, Nav } from 'react-bootstrap'
import './Cart.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsCartXFill } from "react-icons/bs";



export const Cart = () => {

    const { cart, vaciarCart, cantidadTotal, total } = useContext(CartContext)
    
    return (
        <div className='container-cart'>
        {
            cantidadTotal() === 0
            ?
            <div className='cartVacio'>
                <h2 className='texto-cartVacio'> No hay ítems en el carrito </h2>
                <Nav.Link as={Link} to={`/`} className='link-cartVacio' > 
                    <Button variant='warning'>
                    <BsChevronDoubleLeft/> Volver a la tienda <BsChevronDoubleRight/>
                    </Button> 
                </Nav.Link>
            </div>
            :
            <div className='container-subtotales'>
              {cart.map(prod => <CartItem key={prod.id} {...prod}  />)}
              <div className='container-totales'>
                <h3 className='texto-cartTotal' > Total: ${total()} </h3>
                <Button className='boton-vaciar' variant='warning' onClick={() => vaciarCart()}> Limpiar carrito <BsCartXFill/></Button>
              </div>
                <Link to='/checkout'>
                  <Button variant='warning' > Checkout </Button>
                </Link>
          </div>
        }
        </div>
          
    )
}