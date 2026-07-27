import { useState } from 'react'
import './App.css'

const App = () => {

  const initialState = [
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ]

  const availableBalance = 100
  const [availableItems, setAvailableItems] = useState(initialState)
  const [shoppingCart, setShoppingCart] = useState([])

  const handleAddToCart = (clickedCart) => {
     const result = availableItems.filter((addItem) => addItem !==  clickedCart)
     availableItems(result)

  }


  return (

    <div>

      <h1>Zaids Closet</h1>
      <h2>Your Balance: {availableBalance} </h2>
      <h2>Available Items</h2>
      <br />
      {availableItems.map((availableItem) => (
        <>
          <p>{availableItem.name} : {availableItem.price} $</p>

          <h2>Shopping Cart</h2>
          {shoppingCart.map((cartItem) => (
            
              <p>{cartItem}</p>
            
          ))}
          
          <button onClick={() => {handleAddToCart(availableItem)}}>Add to Cart</button>

        </>
      ))}
      
    </div>

  )
}


export default App
