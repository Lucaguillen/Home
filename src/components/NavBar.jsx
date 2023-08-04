import React from 'react'
import {Menu, MenuButton, MenuItem, MenuList, IconButton, Flex, Box, Spacer} from "@chakra-ui/react"
import {HamburgerIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex bg="gray">
      <Box className='logoTexto' p='4' >
        <Link to={"/"} >
        StreetWear 
        </Link>
      </Box>
      <Spacer/>
      <Box p="4">
        <Link to={"/Cart"}> 
        <CartWidget/>
        </Link>
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
                  <Link to={`/category/${"electrodomesticos"}`}>
                    Electrodomesticos
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/category/${"cocina"}`}>
                    Cocina
                  </Link>
                </MenuItem>
            </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}


export default NavBar