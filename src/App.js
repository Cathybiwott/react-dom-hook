import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Products from './Products';
import ProductDetailsPage from './ProductDetails';
import AddProductForm from './AddProductForm';

function App() {
  return (
    <div className="App">
       <Navbar/>
<BrowserRouter>
<Routes>
  { <Route path='/Login' element ={<Login/>}></Route> }
  { <Route path='ProductDetails' element={<ProductDetailsPage/>}/> }
  { <Route path='/product/:productId' element ={<ProductDetailsPage/>}/> }
  {<Route path='/Products' element ={<Products/>}/> }
  { <Route path ='/AddProduct' element={<AddProductForm/>}/> }
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
