
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({id, nombre, imagen, categoria, stock, precio}) => {
  return (
    <Card className='itemCard' style={{ width: '18rem', margin: '10px auto' }}>

        <Card.Title className='itemName'>
            {nombre}
        </Card.Title>

        <Card.Body className='itemBody'>
        
            <Card.Img className='itemImg' variant="top" src={imagen}/>

            <Card.Text>
              <strong className='subtitulos'>Precio: </strong><strong>U$S {precio}</strong> por bolsa.
            </Card.Text>

            <Card.Text>
            <strong className='subtitulos'>Stock: </strong><strong>{stock} bolsas</strong> de 50 Kg.
            </Card.Text>
            
            <Card.Text>
            <strong className='subtitulos'>Categoría: </strong><strong>{categoria}</strong> 
            </Card.Text>

            
              <Link className='botonDetalle' to={`/item/${id}`}>
                <Button variant='warning'>Ver detalles</Button>
              </Link>
            

            

        </Card.Body>
    </Card>
  );
}