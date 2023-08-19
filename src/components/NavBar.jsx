import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget"
import { useContext } from 'react'
import { CartContext } from '../context/SoppingCartContext'



const NavBar = () => {
  const [, , , , cantidadproductos] = useContext(CartContext);

  return (
    <div className='navContainer'>
      <div className="navBarContainer">
        <Link to={"/"}>
        <p className="logo">HOGAR</p>
        </Link>
        <div className="searchBarContainer">
          <input className='searchbarInput' type="text" placeholder='Buscar' />
        </div>
        <div className="navButtonContainer">
          <p className="buttonMiCuenta">
            Mi Cuenta
          </p>
          <Link to={"/cart"}> 
            <p>
              Carrito
            </p>
            {
              cantidadproductos > 0 ?(
                <CartWidget/>
              ):(<></>)
            } 
          </Link>
        </div>
      </div>
      <div className="categoryContainer">
        <Link to={`/category/${"cocina"}`}> 
          <div className='avatarContainer'>
            <img src="src/img/cocina.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Cocina</p>
          </div>
        </Link>
        <Link to={`/category/${"electrodomesticos"}`}>
        <div className='avatarContainer' >
          <img src="src/img/electrodomesticos.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Electrodomesticos</p>
        </div>
        </Link>
        <div className='avatarContainer'>
          <img src="src/img/organizacion.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Organizacion</p>
        </div>
        <div className='avatarContainer'>
          <img src="src/img/dormitorio.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Dormitiorio</p>
        </div>
        <div className='avatarContainer'>
          <img src="src/img/comedor.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Comedor</p>
        </div>
        <div className='avatarContainer'>
          <img src="src/img/exteriores.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Exteriores</p>
        </div>
        <div className='avatarContainer'>
          <img src="src/img/iluminacion.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Iluminacion</p>
        </div>
        <div className='avatarContainer'>
          <img src="src/img/oficina.jpg" alt="" className="categoryAvatar"/>
          <p className='textAvatar'>Oficina</p>
        </div>
        
      </div>
    </div>
    
    
  )
}


export default NavBar