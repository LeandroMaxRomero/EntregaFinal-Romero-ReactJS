import '../ItemsListContainer/ItemsListContainer.css'
import { useEffect, useState } from 'react'
import { getProductos, getProductosByCategoria } from '../../AsyncMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemsListContainer = () => {

    const [productos, setProductos] = useState([]);

    const { categoriaId } = useParams()


    useEffect(() => {

        const asyncFunc = categoriaId ? getProductosByCategoria : getProductos;

        asyncFunc(categoriaId)
        .then(response => {
            setProductos(response)
            
        })
        .catch (error => {
            console.error(error)
        })
    }, [categoriaId]);


    return(
        <div className='itemList-container'>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemsListContainer