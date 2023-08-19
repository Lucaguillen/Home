import React, { useContext } from 'react'
import { CartContext } from '../context/SoppingCartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cart, setCart, removeFromCart, clearCart, cantidadproductos, importetotal] = useContext (CartContext)
  if (cantidadproductos === 0){
    return(
      <div>
        <h1>El carrito esta vacio</h1>
        <Link to="/">
          Regrasar al inicio
        </Link>
      </div>
    )
  }
  return (
    <div>
      {cart.map(p => ( 
        <div key={p.id}> 
          <h1>{p.name}</h1>
          <img src={p.picture} alt="" width="100" height="100"/>
          <p>precio por unidad: ${p.price}</p>
          <p>unidades:{p.quantity}</p>
          <button onClick={() => removeFromCart(p.id)}>Remover este producto del carrito</button>
        </div>
      ))}
      <button onClick={clearCart}>X</button>
      <p>importe total: ${importetotal}</p>
      <Link to="/FormOrder">
        <button>Finalizar compra</button>
      </Link>

    </div>
  )
}

export default Cart