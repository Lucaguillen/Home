import React, { useState } from 'react'
import { Card,CardHeader, CardBody, Text, Button } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { ArrowForwardIcon } from "@chakra-ui/icons";




const ItemDetail = ({productos}) => {
  const {id} = useParams()
  const [cantidadAdded, setCantidadAdded] = useState(0)
 
  const handleOnAdd = (cantidad) => {
    setCantidadAdded(cantidad)
    
    
    
  }

  return (
    <div key={productos.id}>
      <Card className='shadow'  align='center'>
        <CardHeader>
          <Text className='tituloitemdetail'>{productos.name}</Text>
        </CardHeader>
        <img className='imgitemdetail' src={productos.picture} alt=""/>
        <CardBody className='textcontaineritemdetail'>
          <Text className='descriptionitemdetail'>{productos.descriptionDetail}</Text>
          <p className='priceitemdetail'>Precio por unidad: <span className='dolar'>$</span>{productos.price}</p>
        </CardBody>
        {
          cantidadAdded > 0 ?(
            <div className='btncontainer'>
              <Link to={"/cart"} >
                <Button  className='countGoCartBtn' colorScheme='red'>
                  Terminar compra
                </Button>
                </Link>
              <Link to={"/"}>
                <Button rightIcon={<ArrowForwardIcon/>} variant='outline' colorScheme='red'>
                Continuar comprando
                </Button>
              </Link>
            </div>

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