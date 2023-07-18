import { Box, Flex } from "@chakra-ui/react"

const CartWidget = () => {
  return (
    <Flex>
        <Box> 
        <h4>Carrito</h4>
        </Box>
        <Box ml="2">
        <p className="numeroCarrito" >1</p>
        </Box>
    </Flex>
  )
}

export default CartWidget