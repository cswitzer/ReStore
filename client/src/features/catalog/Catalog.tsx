import { Button } from "@mui/material"
import { useState, useEffect } from "react"
import { Product } from "../../app/models/product"
import ProductList from "./ProductList"

export default function Catalog() {
  // specify products as an array of type Product
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <ProductList products={products} />
      <Button variant='contained'>
        Add product
      </Button>
    </>
  )
}
