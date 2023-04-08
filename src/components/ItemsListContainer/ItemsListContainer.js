import '../ItemsListContainer/ItemsListContainer.css'

const ItemsListContainer = ({greeting}) => {
    return(
        <div>
            <h2 className="titulo-itemlist">Items List Container</h2>
            <div className="greeting">
                {greeting}
            </div>
        </div>
    )
}
export default ItemsListContainer