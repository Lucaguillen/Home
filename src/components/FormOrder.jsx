import React, { useState } from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import Agradecimiento from './Agradecimiento'
import {  CheckIcon} from "@chakra-ui/icons";
import { Button} from '@chakra-ui/react'

const FormOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSumbit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id})=> setOrderId(id))
    }
    const order = {name,email,address}
    const ordersCollection = collection(db,"orden")

  return (
    <div>
        
        {
            orderId ? <Agradecimiento 
            name={name}
            address={address}
            orderId={orderId}            
            />
            : 
            <>
                <h1 className='todosLosProductos'>Formulario De Compra</h1>
                <form className="formcontainer" onSubmit={handleSumbit}>
                    <input className='input' type="text" placeholder='Nombre y Apellido' onChange={(e) => setName(e.target.value)}/>
                    <input className='input' type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                    <input className='input' type="text" placeholder='Direccion de envio' onChange={(e)=> setAddress(e.target.value)}/>
                    <Button type='sumbit' variant='outline' colorScheme='red'rightIcon={<CheckIcon/>}>Finalizar compra</Button>
                </form>
                <h3 className='todosLosProductos'>Copia tu numero de orden para hacer el seguimiento de tu pedido</h3>
            </>
        }
    </div>
  )
}

export default FormOrder