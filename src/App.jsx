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

  const [availableBalance, setAvailableBalance] = useState(100)
  const [availableItems, setAvailableItems] = useState(initialState)
  const [shoppingCart, setShoppingCart] = useState([])

  const handleAddToCart = (AddItem) => {
   
     const result = availableItems.filter((item) =>{
      return item !==  AddItem})
     setAvailableItems(result)
     setShoppingCart([...shoppingCart,AddItem])
     setAvailableBalance(availableBalance - AddItem.price) 
  }


  return (

    <div>

      <h1>Zaids Closet</h1>
      <h2>Your Balance: {availableBalance} $</h2>
      <h2>Available Items</h2>
      <br />
      {availableItems.map((availableItem) => (
        <>
          <p>{availableItem.name} : {availableItem.price} $</p>

         
          
          <button onClick={() => {handleAddToCart(availableItem)}}>Add to Cart</button>

        </>
      ))}
<hr />
       <h2>Shopping Cart</h2>
          {shoppingCart.map((cartItem) => (
            
              <p>{cartItem.name} : {cartItem.price}$ </p>
            
          ))}
      
    </div>

  )
}


export default App
