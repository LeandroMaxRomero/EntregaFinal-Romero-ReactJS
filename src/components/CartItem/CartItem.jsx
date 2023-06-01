import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { BsCartDashFill } from "react-icons/bs";

export const CartItem = ({nombre, precio, cantidad, id}) => {

  const { removerItem } = useContext (CartContext)

  return (
        <Table bordered hover className='tabla-clara' >
          <tbody>
            <tr className='fila_tabla'>
              <td className='tabla_nombre'><div className='subt-carrito'>{nombre}</div></td>
              <td className='tabla_precio'>U$S <div className='subt-carrito'>{precio}</div></td>
              <td className='tabla_cantidad'><div className='subt-carrito'>{cantidad}</div> u. de 50 Kg</td>
              <td className='tabla_subtotal'>U$S <div className='subt-carrito'>{precio*cantidad}</div></td>
              <td className='tabla_boton'><Button variant='warning' className='boton-eliminar' onClick={()=> removerItem(id)}> Remover ítem __<BsCartDashFill/></Button></td>
            </tr>
          </tbody>
        </Table>
  )
}
