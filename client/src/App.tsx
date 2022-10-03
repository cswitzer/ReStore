import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([{ name: "product1", price: 100.0 }])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
