
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({id, nombre, imagen, categoria, descripcion, stock, precio}) => {
  return (
    <Card className='itemCard' style={{ width: '18rem', margin: '10px auto' }}>

        <Card.Title className='itemName'>
            {nombre}
        </Card.Title>

        <Card.Body className='itemBody'>
        
            <Card.Img className='itemImg' variant="top" src={imagen}/>

            <Card.Text>
                Precio: <strong>U$S {precio}</strong> por bolsa. 
            </Card.Text>

            <Card.Text>
                Stock: <strong>{stock} bolsas</strong> de 50 Kg. 
            </Card.Text>

            <Button variant='warning'>
              <Link className='botonDetalle' to={`/item/${id}`}>Ver detalles</Link>
            </Button>

            

        </Card.Body>
    </Card>
  );
}