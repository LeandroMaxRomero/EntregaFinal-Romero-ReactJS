import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={ <ItemsListContainer /> } />
                <Route path='/categoria/:categoriaId' element={ <ItemsListContainer /> } />
                <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/checkout' element={ <Checkout /> } />
                <Route path='/*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
    
  )
}

export default App;
