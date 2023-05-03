
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

export const ItemDetail = ({id, nombre, imagen, categoria, descripcion, stock, precio}) => {

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
      <ItemCount valorInicial={1} stock={stock} onAdd={(contador)=> console.log(contador)} />
      <div className='botonVolver'>
        <Button variant="warning" className='Button' onClick={onBack}>
          <p>Volver atrás</p>
        </Button>
      </div>
      </Card.Body>
    </Card>
  )
}
