import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>} ></Route>
        <Route path='/inventory' element={<Inventory></Inventory>} ></Route>
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
