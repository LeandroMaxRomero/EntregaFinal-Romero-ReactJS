import './Checkout.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
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
        <>
            <h2 className='loadingOrden'>Su orden está siendo generada...</h2>
            <div className='lds-dual-ring'></div>
        </>
        )
        
    }

    if (ordenId) {
        return (
        <div className='ContainerId'>
            <h1 className='ContainerId__order'>El ID de su orden es: {ordenId}</h1>
            <Link to="/" className='ContainerId__Back'>Back to top</Link>
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
