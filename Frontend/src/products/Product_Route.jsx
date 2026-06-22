import { Routes, Route } from 'react-router-dom'
import { Product } from "./Product_Import"

const Product_Route = () => {
    return (
        <Routes>
            <Route path="/products" element={<Product />} />
        </Routes>
    )
}

export default Product_Route