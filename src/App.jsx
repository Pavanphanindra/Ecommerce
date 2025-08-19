import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  var [data, setData] = useState([])
  var [cart, setCart] = useState([])

  async function fetchData() {
    var result = await fetch("https://fakestoreapi.com/products")
    var response = await result.json()
    setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function AddtoCart(product) {
    var exists = cart.find(item => item.id === product.id)
    if (exists) {
      alert("Already in the cart")
    } else {
      setCart([...cart, product])
    }
  }

  return (
    <div className="container">
      <h1 className="main-heading">🛍️ Product Store</h1>

      <div className="product-list">
        {
          data.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.image} alt={item.title} />
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <button onClick={() => AddtoCart(item)}>Add to Cart</button>
              </div>
            )
          })
        }
      </div>

      <div className="cart-header">🛒 Cart Items: {cart.length}</div>

      <div className="cart-list">
        {
          cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App



































