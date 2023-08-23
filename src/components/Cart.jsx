import React, { useContext } from 'react'
import { CartContext } from '../context/SoppingCartContext'
import { Link } from 'react-router-dom'
import { SmallCloseIcon, DeleteIcon, CheckIcon, ArrowBackIcon} from "@chakra-ui/icons";
import { Button, Tag } from '@chakra-ui/react'



const Cart = () => {
  const [cart, setCart, removeFromCart, clearCart, cantidadproductos, importetotal] = useContext (CartContext)
  if (cantidadproductos === 0){
    return(
      <div className='cartvaciocontainer'>
        <h1 className='cartvaciotext'>El carrito esta vacio</h1>
        <Link to="/">
          <Button className='cartvaciobtn' variant='outline' colorScheme='red' leftIcon={<ArrowBackIcon/>}>Regrasar al inicio</Button>
        </Link>
      </div>
    )
  }
  return (
    <div className='cartContainer'>
      <h1 className='todosLosProductos'>Carrito de compras</h1>
      {cart.map(p => ( 
        <div className='cardCartContainer' key={p.id}> 
          <img className='imgcardcart' src={p.picture} alt="" width="100" height="100"/>
          <h1 className='namecardcart'>{p.name}</h1>
          <p className='pricecardcart'>Precio por unidad: <span className="dolar" >$</span> {p.price}</p>
          <p className='unidadescardcart' >Unidades: <span className="dolar">{p.quantity}</span></p>
          <button className='removerunidad' onClick={() => removeFromCart(p.id)}><SmallCloseIcon/></button>
        </div>
      ))}
      <button className="borrartodo" onClick={clearCart}><DeleteIcon/></button>
      <div className='buttonscart'>
        <Tag fontSize='lg' variant='outline' colorScheme='red' className='importetotalcart'>Importe total: ${importetotal}</Tag>
        <Link  to="/FormOrder">
          <Button variant='outline' colorScheme='red'rightIcon={<CheckIcon/>}>Finalizar compra</Button>
        </Link>
      </div>
      

    </div>
  )
}

export default Cart