import React from 'react'
import {Menu, MenuButton, MenuItem, MenuList, IconButton, Flex, Box, Spacer} from "@chakra-ui/react"
import {HamburgerIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <Flex bg="gray">
      <Box p='4' >
        Nombre de la tienda
      </Box>
      <Spacer/>
      <Box p="4">
        <CartWidget/>
      </Box>
      <Box m="2">
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem>
                Calzado
                </MenuItem>
                <MenuItem>
                Remeras
                </MenuItem>
                <MenuItem>
                buzos
                </MenuItem>
                <MenuItem>
                Camperas
                </MenuItem>
                <MenuItem>
                Pantalones
                </MenuItem>
            </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}


export default NavBar