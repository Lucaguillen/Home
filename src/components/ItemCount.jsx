import React, { useContext, useState } from 'react'
import { CartContext } from '../context/SoppingCartContext'

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
                <button className='resta' onClick={resta}>-</button>
                <h3 className='number'>{cantidad}</h3>
                <button className='suma' onClick={suma}>+</button>
            </div>
            <div>
                {
                    cantidad === 0? (
                        
                        <button disabled className='buttonAddCart'>
                            Agregar al carrito
                        </button>
                        
                    ) : (
                        
                        <button className='buttonAddCart' onClick={()=> {addToCart(); handleOnAdd(cantidad)}}>
                            Agregar al carrito
                        </button>
                        
                    )
                }
            </div>
        </div>
  )
}

export default ItemCount