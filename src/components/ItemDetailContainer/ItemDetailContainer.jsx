
import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
// import { getProductoById } from '../../AsyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'




export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'Items', itemId)

        getDoc(docRef)
            .then(response => {
                setProducto({ id: response.id, ...response.data() })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])

    if(loading){
        return(
            <div>
                <div className='lds-dual-ring'></div>
                <h3>Loading...</h3>
            </div>
        )
    }
    
    return (
        <div className='contenedor-detalles'>
            <ItemDetail {...producto}/>
        </div>
    )
}
