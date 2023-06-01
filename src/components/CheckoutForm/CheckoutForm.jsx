import { useState } from 'react'
import './CheckoutForm.css'
import { Button, FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import { BsReceiptCutoff } from "react-icons/bs";



export const CheckoutForm = ({onConfirm}) => {

    const [nombreUsuario, setNombreUsuario] = useState('')
    const [telefonoUsuario, setTelefonoUsuario] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [confirmarEmailUsuario, setConfirmarEmailUsuario] = useState('')

    const handleConfirm = (e) =>{
        e.preventDefault()

        if(emailUsuario !== confirmarEmailUsuario){
            return(
                alert('Las direcciones de mail no coinciden')
            )
        }
        else {
            const usuarioData = {
                nombreUsuario, telefonoUsuario, emailUsuario
            }
    
            onConfirm(usuarioData)
        }
    }

  return (
    <div className='container-formulario' >
        <form onSubmit={handleConfirm} className='formulario'>

            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Nombre</FormLabel>
                <FormControl 
                type="text"
                placeholder="Ingrese su nombre completo"
                value={nombreUsuario}
                onChange={({ target }) => setNombreUsuario(target.value)}
                required
                 />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Teléfono</FormLabel>
                <FormControl 
                type="text"
                placeholder="Ingrese su número de teléfono"
                value={telefonoUsuario}
                onChange={({ target }) => setTelefonoUsuario(target.value)}
                required
                 />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Email</FormLabel>
                <FormControl 
                type="email"
                placeholder="Ingrese su dirección de email"
                value={emailUsuario}
                onChange={({ target }) => setEmailUsuario(target.value)}
                required 
                 />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
                <FormLabel>Confirmar Email</FormLabel>
                <FormControl 
                type="email"
                placeholder="Ingrese nuevamente su dirección de email"
                value={confirmarEmailUsuario}
                onChange={({ target }) => setConfirmarEmailUsuario(target.value)}
                required 
                 />
            </FormGroup>

            <Button className='boton-generar' variant="warning" type="submit">
              Generar orden de compra ___<BsReceiptCutoff/>_
            </Button>
        </form>
    </div>
  )
}