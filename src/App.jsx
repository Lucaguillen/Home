import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/category/:category" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>



      </Routes>
      
      
    </BrowserRouter>
  )
} 

export default App