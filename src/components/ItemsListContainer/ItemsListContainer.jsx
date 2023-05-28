import '../ItemsListContainer/ItemsListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getProductos, getProductosByCategoria } from '../../AsyncMock'
import { ItemList } from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemsListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()


    useEffect(() => {

        setLoading(true)

        const coleccionPorCategoria = query(collection(db, 'Items'), where('categoria', '==', 'categoriaId'))

        const collectionRef = categoriaId ? coleccionPorCategoria : collection(db, 'Items')


        getDocs(collectionRef)
            .then(response =>{ 
                setProductos(response.docs.map(doc =>({ id: doc.id, ...doc.data() })))
            })
            .catch(error => {
                console.log(error)})
            .finally(()=>{
                setLoading(false)
            })
    }, [categoriaId]);

    if(loading){
        return(
            <div>
                <div className='lds-dual-ring'></div>
                <h3>Loading...</h3>
            </div>
        )
    }


    return(
        <div className='itemList-container'>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemsListContainer