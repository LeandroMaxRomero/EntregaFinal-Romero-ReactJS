import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { Button, Nav } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import './Cart.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsCartXFill, BsListCheck } from "react-icons/bs";



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
              <Table striped bordered hover variant="dark" className='tabla-oscura' >
                  <thead>
                    <tr className='fila_tabla'>
                      <th>Variedad</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                      <th>
                        <Button className='boton-eliminar vaciar' variant='warning' onClick={() => vaciarCart()}>
                          Vaciar carrito ___<BsCartXFill/>
                        </Button>
                      </th>
                    </tr>
                  </thead>
              </Table>
              {cart.map(prod => <CartItem key={prod.id} {...prod}  />)}
              <div className='container-totales'>
                <Table striped bordered hover className='tabla-clara' >
                    <thead>
                      <tr className='fila_tabla'>
                        <th></th>
                        <th></th>
                        <th> TOTAL </th>
                        <th><div className='texto-cartTotal'>U$S {total()}</div></th>
                        <th>
                          <Link to='/checkout'>
                              <Button className='boton-checkout' variant='warning' > Checkout <BsListCheck/></Button>
                          </Link>
                        </th>
                      </tr>
                    </thead>
                </Table>
              </div>
                
          </div>
        }
        </div>
          
    )
}