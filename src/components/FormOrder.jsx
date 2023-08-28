import React, { useState, useEffect } from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import Agradecimiento from './Agradecimiento'
import {  CheckIcon, NotAllowedIcon} from "@chakra-ui/icons";
import { Button, Text} from '@chakra-ui/react'

const FormOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [emailMatch, setEmailMatch] = useState(true);
    const [address, setAddress] = useState("")
    const [orderId, setOrderId] = useState(null)

    useEffect(() => {
        if (email && emailConfirm) {
            const timeout = setTimeout(() => {
                setEmailMatch(email === emailConfirm);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [email, emailConfirm]);
    
    

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
                    <input className='input' type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value.toLowerCase())}/>
                    <input className='input' type="text" placeholder='Confirmar Email' onChange={(e)=> setEmailConfirm(e.target.value.toLowerCase())}/>
                    <input className='input' type="text" placeholder='Direccion de envio' onChange={(e)=> setAddress(e.target.value)}/>
                    {
                        !emailMatch ? (
                            <Button variant='outline' colorScheme='red' rightIcon={<NotAllowedIcon />}>
                                Los correos electrónicos no coinciden
                            </Button>
                        ) : (
                            !name || !email || !emailConfirm || !address ? (
                                <Button variant='outline' colorScheme='red' rightIcon={<NotAllowedIcon />}>
                                    Los campos no pueden estar vacíos
                                </Button>
                            ) : (
                                <Button type='submit' variant='outline' colorScheme='red' rightIcon={<CheckIcon />}>
                                    Finalizar compra
                                </Button>
                            )
                        )
                    }
                    
                </form>
                <h3 className='todosLosProductos'>Copia tu numero de orden para hacer el seguimiento de tu pedido</h3>
            </>
        }
    </div>
  )
}

export default FormOrder