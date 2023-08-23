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
          <Link className='cartButtonContainer' to={"/cart"}> 
            <p className="buttonMiCuenta">
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
            <img src="https://f.fcdn.app/imgs/d24165/www.divino.com.uy/div/8ae2/webp/recursos/6435/150x150/cocina.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Cocina</p>
          </div>
        </Link>
        <Link to={`/category/${"electrodomesticos"}`}>
          <div className='avatarContainer' >
            <img src="https://f.fcdn.app/imgs/7f74f1/www.divino.com.uy/div/9182/webp/recursos/6434/150x150/dsc-0053.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Electrodomesticos</p>
          </div>
        </Link>
        <Link to={`/category/${"organizacion"}`}>
          <div className='avatarContainer'>
            <img src="https://f.fcdn.app/imgs/83a74e/www.divino.com.uy/div/1a72/webp/recursos/6438/150x150/deco-organizacion.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Organizacion</p>
          </div>
        </Link>
        <Link to={`/category/${"dormitorio"}`}>
         <div className='avatarContainer'>
            <img src="https://f.fcdn.app/imgs/6565c4/www.divino.com.uy/div/4a0b/webp/recursos/6431/150x150/dsc-0130-hdr.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Dormitiorio</p>
          </div>
        </Link>
        <Link to={`/category/${"comedor"}`}>
          <div className='avatarContainer'>
            <img src="https://f.fcdn.app/imgs/eff812/www.divino.com.uy/div/74b8/webp/recursos/6433/150x150/comedor-2.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Comedor</p>
          </div>
        </Link>
        <Link to={`/category/${"exteriores"}`}>
          <div className='avatarContainer'>
            <img src="https://f.fcdn.app/imgs/d40810/www.divino.com.uy/div/dad9/webp/recursos/6432/150x150/exteriores.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Exteriores</p>
          </div>
        </Link>
        <Link to={`/category/${"iluminacion"}`}>
          <div className='avatarContainer'>
            <img src="https://f.fcdn.app/imgs/459652/www.divino.com.uy/div/fa26/webp/recursos/6439/150x150/iluminacion.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Iluminacion</p>
          </div>
        </Link>        
        <Link to={`/category/${"oficina"}`}>
          <div className='avatarContainer'>
            <img src="https://f.fcdn.app/imgs/1d6fe7/www.divino.com.uy/div/b4ce/webp/recursos/6436/150x150/banners-menu-mobile-oficina-1-50.jpg" alt="" className="categoryAvatar"/>
            <p className='textAvatar'>Oficina</p>
          </div>
        </Link>
        
        
      </div>
    </div>
    
    
  )
}


export default NavBar