import React, { useState } from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import Agradecimiento from './Agradecimiento'

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
                <h1>Formulario De Compra</h1>
                <form onSubmit={handleSumbit}>
                    <input type="text" placeholder='Nombre y Apellido' onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="text" placeholder='Direccion de envio' onChange={(e)=> setAddress(e.target.value)}/>
                    <button type='sumbit'>Finalizar Pedido</button>
                </form>
                <h3>Copia tu numero de orden para hacer el seguimiento de tu pedido</h3>
            </>
        }
    </div>
  )
}

export default FormOrder