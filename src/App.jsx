import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenido a tu tienda de confianza, tenemos lo que buscas "/>
    </>
  )
}

export default App