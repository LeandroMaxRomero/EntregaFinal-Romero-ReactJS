import '../CartWidget/CartWidget.css';

import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return(
        <div className="contenedor-carrito">

            <div className="carrito">
                <div className='cantidad-carrito'>6</div>
                <BsCart4 size={50} />
            </div>
            
        </div>


    )
}
export default CartWidget