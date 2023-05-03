
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import './ItemCount.css'

function ItemCount({valorInicial, stock, onAdd}) {

  const [contador, setContador] = useState(valorInicial)

  const decrementaContador = (n) => {
    if(contador > 1){
      setContador(contador - n)
    }
  }

  const aumentaContador = (n) => {
    if(contador < stock){
      setContador(contador + n)
    }
  }

  const Boton = ({cambiaContador, text}) => {
    return (
      <Button variant="warning" onClick={cambiaContador}>
          {text}
      </Button>
    )
  }
  
  return (
    <div className='contenedor-botones'>
      <ButtonGroup aria-label="Basic example">
          <Boton
            cambiaContador = { () => decrementaContador(1) }
            text = {" - "}
          />
              <div className='textoContador'><strong> {contador} </strong></div>
          <Boton 
            cambiaContador = { () => aumentaContador(1) }
            text = {" + "}
          />
      </ButtonGroup>

      <div className='botonAgregar'>
        <Button  variant="warning" className='Button' onClick={() => onAdd(contador)}>
            <p>Agregar a carrito</p>
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;