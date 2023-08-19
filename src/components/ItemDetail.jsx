import React, { useContext, useState } from 'react'
import { Card,CardHeader, CardBody, Text } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'



const ItemDetail = ({productos}) => {
  const {id} = useParams()
  /* const filteredProducts = productos.filter((producto)=> producto.id == id) */
  const [cantidadAdded, setCantidadAdded] = useState(0)
 
  const handleOnAdd = (cantidad) => {
    setCantidadAdded(cantidad)
    console.log(cantidad)
    
    
  }

  return (
    <div key={productos.id}>
      <Card align='center'>
        <CardHeader>
          <Text>{productos.name}</Text>
          <img src={productos.picture} alt="" width="100" height="100"/>
        </CardHeader>
        <CardBody>
            <Text>{productos.description}</Text>
        </CardBody>
        {
          cantidadAdded > 0 ?(
            <>
            <Link to={"/cart"} className='countGoCartBtn'>Terminar compra</Link>
            <Link to={"/"} className='countGoCartBtn'>Continuar comprando</Link>
            </>

          ) : (
            <ItemCount 
            handleOnAdd={handleOnAdd} 
            price={productos.price}
            name={productos.name}
            stock={productos.stock}
            id={productos.id}
            picture={productos.picture}
            />
          )
        }
      </Card>
    </div> 
  )
}

export default ItemDetail