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
  console.log(product)

  return (
    <>
        <ItemDetail
        productos={product}
        
        />
    </>
  )

}
export default ItemDetailContainer

/* const ItemDetailContainer = () => {
    const productos = [
        {id:1,name:"Producto A", description:"Descripcion Detallada A",price: 10000,pictureUrl:imgSilla, stock:10, category:"electrodomesticos",quantity:1},
        {id:2,name:"Producto B", description:"Descripcion Detallada B",price: 10000,pictureUrl:imgSilla, stock:10, category:"electrodomesticos",quantity:1},
        {id:3,name:"Producto C", description:"Descripcion Detallada C",price: 10000,pictureUrl:imgSilla, stock:10, category:"electrodomesticos",quantity:1},
        {id:4,name:"Producto D", description:"Descripcion Detallada D",price: 10000,pictureUrl:imgSilla, stock:10, category:"cocina",quantity:1 },
        {id:5,name:"Producto E", description:"Descripcion Detallada E",price: 10000,pictureUrl:imgSilla, stock:10, category:"cocina",quantity:1 },
        {id:6,name:"Producto F", description:"Descripcion Detallada F",price: 10000,pictureUrl:imgSilla, stock:10, category:"cocina",quantity:1 }
    ]
    const getProductos = () => {
        return new Promise ((res, rej) => {
          if (productos.length > 0){
            setTimeout(() => {
              res(productos)  
            }, 2000);
          }else{
            rej(new Error ("Error al buscar datos"))
          }
        })
    }
    async function FetchingData(){
        try {
          const productosFetched = await getProductos()
        } catch (error){
          console.warn(error)
        }
    }
    FetchingData()
   
    
  
}
 */
