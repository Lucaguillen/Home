import { createContext, useState } from "react"

export const CartContext = createContext({cart: []})

export const ShoppingCartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const cantidadproductos = cart.length
    

    /* eliminar del carrito */

    const removeFromCart = (id) => {
        setCart((updatedCart) => {
          const isItemFound = updatedCart.some((item) => item.id === id);
          if (isItemFound) {
            const updatedItems = updatedCart.map((item) => {
                if (item.id === id && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item
                }
            });
      
            const borraritemsvacios = updatedItems.filter((item) => item.quantity > 0);
            return borraritemsvacios;
          }
      
          return updatedCart;
        });
    };
    /* limpiar carrito */
    const clearCart = () => {
        setCart([])
    }
    const importetotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return(
        <CartContext.Provider value={[cart,setCart, removeFromCart,clearCart, cantidadproductos, importetotal]}>
            {children}
        </CartContext.Provider>
    )
}
export default ShoppingCartProvider