import React from 'react'
import imgSilla from "../img/silla.jpg"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
  const {category} = useParams()
  const productos = [
    {id:1,name:"Producto A", description:"Descripcion A",price: 10000,pictureUrl:imgSilla, category:"electrodomesticos"},
    {id:2,name:"Producto B", description:"Descripcion B",price: 10000,pictureUrl:imgSilla, category:"electrodomesticos"},
    {id:3,name:"Producto C", description:"Descripcion C",price: 10000,pictureUrl:imgSilla, category:"electrodomesticos"},
    {id:4,name:"Producto D", description:"Descripcion D",price: 10000,pictureUrl:imgSilla, category:"cocina" },
    {id:5,name:"Producto E", description:"Descripcion E",price: 10000,pictureUrl:imgSilla, category:"cocina" },
    {id:6,name:"Producto F", description:"Descripcion F",price: 10000,pictureUrl:imgSilla, category:"cocina" }
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

  const filteredProducts = productos.filter((producto)=> producto.category === category)



  return (
    <ItemList
    productos={filteredProducts}/>
  )
}

export default ItemListContainer