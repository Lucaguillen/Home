import React from 'react'
import { Card,CardHeader, CardBody, CardFooter,Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({name,description,pictureUrl,id}) => {
  console.log(id)
  return (
    <Card align='center'>
        <CardHeader>
          <Text>{name}</Text>
          <img src={pictureUrl} alt="" width="100" height="100"/>
        </CardHeader>
        <CardBody>
            <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${id}`}>
            <Button colorScheme='blue'>
              Detalles
            </Button>
          </Link>
        </CardFooter>
    </Card>
  )
}

export default Item