import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  
  
  return (
    <div className="itemListContainer">
      {productos.map((p)=>{
        return(
          <Item
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.descriptionDetail}
          pictureUrl={p.picture}
          price={p.price}
          />
        )
      })}
    </div>
  )
}

export default ItemList