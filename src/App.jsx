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

const shoppingCart = []
const availableBalance = 100

const [availableItems , setAvailableItems ] = useState(initialState)


  return (

    <div>

    <h1>Zaids Closet</h1>
<h2>Your Balance: {availableBalance} </h2>
<h2>Available Items</h2>
<h2>Shopping Cart</h2>

 </div>

  )
}

export default App
