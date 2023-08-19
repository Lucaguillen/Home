import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import ShoppingCartProvider from "./context/SoppingCartContext"
import FormOrder from "./components/FormOrder"



const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>

        <NavBar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/FormOrder" element={<FormOrder/>}/>
          




        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
} 

export default App