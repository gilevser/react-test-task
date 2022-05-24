import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductList from "./compounents/ProductList/ProductList";
import ProductPage from "./compounents/ProductPage/ProductPage";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Routes>
              <Route path='/' element={ <ProductList/>}/>
              <Route path='/product/:id' element={<ProductPage/>}/>
          </Routes>
      </header>
    </div>
  )
}
