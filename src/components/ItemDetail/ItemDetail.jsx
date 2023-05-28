
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({id, nombre, imagen, categoria, descripcion, stock, precio}) => {

  const [cantidadAgregada, setCantidadAgregada] = useState(0)

  const {agregarItem} = useContext(CartContext)

  const  handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad)

    const item = {id, nombre, precio}

    agregarItem(item, cantidad)
  }

  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imagen}/>
      <Card.Body>
        <Card.Title className='cardNombre'>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio en U$S/bolsa: <strong>{precio}</strong></ListGroup.Item>
        <ListGroup.Item>Stock en bolsas de 50 Kg: <strong>{stock}</strong> </ListGroup.Item>
        <ListGroup.Item>Variedad: <strong>{categoria}</strong></ListGroup.Item>
      </ListGroup>
      <Card.Body className='botonesCard'>
        <>
        {
          cantidadAgregada > 0
          ?
          <Button variant="warning" className='Button'>
            <Nav.Link as={Link} to={`/cart`} className='botonTerminar'>Finalizar compra</Nav.Link>
          </Button>
          :
          <ItemCount valorInicial={1} stock={stock} onAdd={handleOnAdd} />
        }
        </>

      <div className='botonVolver'>
        <Button variant="warning" className='Button' onClick={onBack}>
          <p>Volver atrás</p>
        </Button>
      </div>
      </Card.Body>
    </Card>
  )
}
