import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderNavbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/store' element={<StorePage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
