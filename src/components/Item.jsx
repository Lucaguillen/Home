import React from 'react'
import { Card,CardHeader, CardBody, CardFooter,Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Item = ({name,pictureUrl,id,price}) => {
  return (
    <Card className='cardItemListContainer' boxShadow='base' align='center'>
        <CardHeader className='titulocardcontainer'>
          <Text className='titulocard'>{name}</Text>
        </CardHeader>
        <img src={pictureUrl} alt="" />
        <CardBody>
          <Text className='pricecard'>Precio <span className='dolar'>$</span>{price}</Text>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${id}`}>
            <Button rightIcon={<ArrowForwardIcon/>} variant='outline' colorScheme='red' >
              Detalles
            </Button>
          </Link>
        </CardFooter>
    </Card>
  )
}

export default Item