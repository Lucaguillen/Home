import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/SoppingCartContext'

const Agradecimiento = ({name,address,orderId}) => {
  const [, , , clearCart] = useContext(CartContext)

  return (
    <div>
        <h1> {name} muchas gracias por completar su pedido</h1>
        <h2> su numero de orden es: {orderId}</h2>
        <h2> el pedido sera entregado en las proximas 24hs a {address}</h2>
        <Link to="/">
        <button onClick={clearCart()}>Volver al inicio</button>
        </Link>

    </div>
  )
}

export default Agradecimiento