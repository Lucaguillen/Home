import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/SoppingCartContext'
import { ArrowBackIcon} from "@chakra-ui/icons";
import { Button} from '@chakra-ui/react'

const Agradecimiento = ({name,address,orderId}) => {
  const [, , , clearCart] = useContext(CartContext)
  const cleanOrderId = () =>{
    orderId = null
  }

  return (
    <div className="agradecimientocontainer shadow" >
      <h1 className='pricecardcart'> {name} Muchas gracias por completar su pedido</h1>
      <h2 className='pricecardcart'> Su numero de orden es: <span className='dolar'>{orderId}</span></h2>
      <h2 className='pricecardcart'> El pedido sera entregado en las proximas 24hs a {address}</h2>
      <Link to="/">
        <Button onClick={() => {clearCart(); cleanOrderId();}}className='cartvaciobtn' variant='outline' colorScheme='red' leftIcon={<ArrowBackIcon/>}>Regrasar al inicio</Button>
      </Link>
    </div>
  )
}

export default Agradecimiento