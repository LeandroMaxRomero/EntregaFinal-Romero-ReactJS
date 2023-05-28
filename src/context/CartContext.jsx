import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const agregarItem = (item, cantidad) => {
        if(!estaEnCart(item.id)){
            setCart( prev => [...prev, {...item, cantidad}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removerItem = (itemId) => {
        const cartActualizado = cart.filter(producto => producto.id !== itemId)
        setCart(cartActualizado)
    }

    const vaciarCart = () => {
        setCart([])
    }

    const estaEnCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    const cantidadTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
      };
    
      const total = () => {
        return cart.reduce((acc, prod) => (acc += prod.precio * prod.cantidad), 0);
      }

    return(
        <CartContext.Provider value={{cart, agregarItem, removerItem, vaciarCart, cantidadTotal, total}}>
            {children}
        </CartContext.Provider>

    )

}