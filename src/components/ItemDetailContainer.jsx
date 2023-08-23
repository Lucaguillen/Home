import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState ([])
  const {id} = useParams()

  


  useEffect(() => {
    const db = getFirestore()
    const oneItem = doc(db, "productos",id )
    getDoc(oneItem).then((snapshot)=>{
      if (snapshot.exists()){
        const docs = snapshot.data()
        setProduct({...docs,id})
      }
    })
  }, [])
  

  return (
    <>
        <ItemDetail
        productos={product}
        
        />
    </>
  )

}
export default ItemDetailContainer