import { useContext } from "react"
import { CartContext } from "../context/SoppingCartContext"


const CartWidget = () => {
  const [, , , , cantidadproductos] = useContext(CartContext);

  console.log(cantidadproductos)
  return (
    <p className="buttonCart">
      {cantidadproductos}
    </p>
  )
}

export default CartWidget