import './Checkout.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { Button, Nav } from 'react-bootstrap'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from 'react-router-dom'

export const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [ordenId, setOrdenId] = useState('')

    const {cart, total, vaciarCart} = useContext(CartContext)

    const crearOrden = async ({ nombreUsuario, telefonoUsuario, emailUsuario }) => {
        setLoading(true)

        try{
            const objetoOrden = {
                comprador: {
                    nombreUsuario, telefonoUsuario, emailUsuario
                },
                items: cart,
                total:total(),
                fecha: Timestamp.fromDate(new Date())
            }

            const lote = writeBatch(db)

            const fueraDeStock = []

            const ids = cart.map((prod) => prod.id)

            const productosAgregadosDB = await getDocs(query(collection(db, 'Items'), where(documentId(), 'in', ids)));

            const { docs } = productosAgregadosDB

            docs.forEach((doc) => {

                const stockDb = doc.data().stock

                const productosAgregadosCart = cart.find((prod) => prod.id === doc.id)
                const cantidadProductos = productosAgregadosCart?.cantidad

                if (stockDb >= cantidadProductos) {
                    lote.update(doc.ref, { stock: stockDb - cantidadProductos })
                } else {
                    fueraDeStock.push({ id: doc.id, ...doc.data() })
                }
            });

            if (fueraDeStock.length === 0) {
                
                await lote.commit()

                const ordenAgregada = await addDoc(collection(db, 'ordenes'), objetoOrden) 

                setOrdenId(ordenAgregada.id)
                vaciarCart();    
                
            } else {
                console.error('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };


    if (loading) {
        return(
        <div className='container-loading' >
            <h2 className='texto-loading'>Su orden está siendo generada...</h2>
            <div className='lds-dual-ring'></div>
        </div>
        )
        
    }

    if (ordenId) {
        return (
        <div className='container-orden'>
            <h2 className='Checkout-titulo'>El ID de su orden es: <strong className='texto-ordenId'>{ordenId}</strong></h2>
            <Nav.Link as={Link} to={`/`} className='link-cartVacio' > 
                <Button variant='warning'>
                    <BsChevronDoubleLeft/> Volver a la tienda <BsChevronDoubleRight/>
                </Button> 
            </Nav.Link>
        </div>
        );
    }

    return (
        <>
            <div className='container-checkout'>
                <h2 className='Checkout-titulo'> Checkout </h2>
                <div className='Checkout-enunciado'> Por favor, complete con sus datos personales para recibir su orden de compra </div>
                <CheckoutForm onConfirm={crearOrden}/>
            </div>
        </>
    )            
}
