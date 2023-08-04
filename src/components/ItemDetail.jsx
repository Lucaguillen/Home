import React from 'react'
import { Card,CardHeader, CardBody, CardFooter,Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {
  const {id} = useParams()
  const filteredProducts = productos.filter((producto)=> producto.id == id)

  return (
    <>
      {filteredProducts.map((p)=>{
        return(
          <div key={p.id}>
            <Card align='center'>
              <CardHeader>
                <Text>{p.name}</Text>
                <img src={p.pictureUrl} alt="" width="100" height="100"/>
              </CardHeader>
              <CardBody>
                  <Text>{p.description}</Text>
              </CardBody>
              <CardFooter>
                  <Button colorScheme='blue'>Agregar al carrito</Button>
              </CardFooter>
            </Card>
          </div>  
        )
      })}
    </>
  )
}

export default ItemDetail