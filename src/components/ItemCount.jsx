import React, { useContext, useState } from 'react'
import { CartContext } from '../context/SoppingCartContext'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon,MinusIcon,AddIcon } from "@chakra-ui/icons";



const ItemCount = ({stock, id, price, name, handleOnAdd, picture}) => {
    /* botones de suma y resta */
    const [cantidad, setCantidad] = useState(0)
    const suma = () => {
        if(cantidad < stock)
        setCantidad(cantidad+1)
    }
    const resta = () => {
        if(cantidad > 0){
            setCantidad(cantidad-1)
        }
    }
    /* agregar al cart */
    const [cart, setCart] = useContext (CartContext)
    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return{...item, quantity: item.quantity + cantidad,};
                    }else{
                        return item;
                    }
                })
            }else{
                return [...currItems, {id, quantity: cantidad,price,name, picture}]; 
            }
        })
    }
    
   

  return (
    <div className='countContainer'>
            <div className='countControls'>
                <Button size='xs' colorScheme='blackAlpha' className='resta' onClick={resta}>{<MinusIcon/>}</Button>
                <h3 className='number'>{cantidad}</h3>
                <Button size='xs' colorScheme='blackAlpha' className='suma' onClick={suma}>{<AddIcon/>}</Button>
            </div>
            <div>
                {
                    cantidad === 0? (
                        
                        <Button mb={3} rightIcon={<ArrowForwardIcon/>} variant='outline' colorScheme='gray'>
                        Agregar al Carrito
                        </Button>
                        
                    ) : (
                        
                        <Button mb={3} rightIcon={<ArrowForwardIcon/>} variant='outline' colorScheme='red' onClick={()=> {addToCart(); handleOnAdd(cantidad)}}>
                            Agregar al Carrito
                        </Button>
                        
                    )
                }
            </div>
        </div>
  )
}

export default ItemCount