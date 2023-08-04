import React from 'react'
import ItemDetail from './ItemDetail'
import imgSilla from "../img/silla.jpg"

const ItemDetailContainer = () => {
    const productos = [
        {id:1,name:"Producto A", description:"Descripcion Detallada A",price: 10000,pictureUrl:imgSilla, stock:10, category:"electrodomesticos"},
        {id:2,name:"Producto B", description:"Descripcion Detallada B",price: 10000,pictureUrl:imgSilla, stock:10, category:"electrodomesticos"},
        {id:3,name:"Producto C", description:"Descripcion Detallada C",price: 10000,pictureUrl:imgSilla, stock:10, category:"electrodomesticos"},
        {id:4,name:"Producto D", description:"Descripcion Detallada D",price: 10000,pictureUrl:imgSilla, stock:10, category:"cocina" },
        {id:5,name:"Producto E", description:"Descripcion Detallada E",price: 10000,pictureUrl:imgSilla, stock:10, category:"cocina" },
        {id:6,name:"Producto F", description:"Descripcion Detallada F",price: 10000,pictureUrl:imgSilla, stock:10, category:"cocina" }
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
          console.log(productosFetched)
        } catch (error){
          console.warn(error)
        }
    }
    FetchingData()
   
    
  return (
    <>
        <ItemDetail
        productos={productos}
        key={productos.id}
        name={productos.name}
        description={productos.description}
        pictureUrl={productos.pictureUrl}
        />
    </>
  )
}

export default ItemDetailContainer