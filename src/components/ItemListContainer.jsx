import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import { Link, useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from "firebase/firestore"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {category} = useParams()
  

  useEffect(()=>{
    const db = getFirestore()

    const itemsCollection = collection(db,"productos")
    getDocs(itemsCollection).then((snapshot)=> {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setProducts(docs)
    });    
  }, [])
  

  const filteredProducts = products.filter((p)=> p.category === category)

  return (
    <div >
      { category ? 
      <Link to="/">
        <h1 className='volverAlhome'>Volver a todos los productos</h1>
      </Link>  
      : <h1 className='todosLosProductos'>Todos los productos</h1>}
      {category ? <ItemList productos={filteredProducts}/> : <ItemList productos={products}/>}
    </div>
  )
}

export default ItemListContainer