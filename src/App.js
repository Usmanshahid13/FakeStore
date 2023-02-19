
import './App.css';
import  {Header}  from "../src/component/Header";
import  {Footer}  from "../src/component/Footer";
// import { Cart } from "../src/component/Cart";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../src/component/Login";
import Register from "../src/component/Register";
import Product from '../src/component/Product';
import Users from "../src/component/Users";
import ProductListing from './component/ProductListing';
import Home from './component/Home';



function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<><Header /><Home/><Footer/></>}></Route>
        <Route index element={<><Header /><ProductListing /><Footer /></>} />
      <Route path="/login" element={<><Header /><Login /><Footer/></>}></Route>
      <Route path="/register" element={<><Header /><Register /><Footer/></>}></Route>
      <Route path="/users" element={<><Header /><Users /><Footer /></>} />
        <Route path="/user/:id" element={<><Header /><Users/><Footer /></>} />
        <Route path="/product/:id" element={<><Header /><Product /><Footer /></>} />
    </Routes>

  </Router>
  );
}

export default App;
