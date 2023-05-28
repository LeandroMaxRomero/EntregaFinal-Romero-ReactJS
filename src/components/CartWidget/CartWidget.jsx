import { useContext } from 'react';
import '../CartWidget/CartWidget.css';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    return(
        
            <Nav.Link as={Link} to={`/cart`} style={{display: cantidadTotal() > 0 ? 'block' : 'none'}}>
            <div className="contenedor-carrito">
                <div className="carrito">
                    <div className='cantidad-carrito'>{cantidadTotal()}</div>
                    <BsCart4 size={50} />
                </div>
            </div>
            </Nav.Link>
    )
}
export default CartWidget