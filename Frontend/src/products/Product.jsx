import { useState, useEffect } from 'react'
import {
    Product_Hero,
    Product_Option,
    Product_Project,
    Product_Order,
    Product_Customize,
    Product_CTA
} from './Product_Import'
import './assets/css/Product.css'

const Product = () => {
    const [selectedOption, setSelectedOption] = useState('projects')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Render content based on selected option
    const renderContent = () => {
        switch(selectedOption) {
            case 'projects':
                return <Product_Project />
            case 'order':
                return <Product_Order />
            case 'customize':
                return <Product_Customize />
            default:
                return <Product_Project />
        }
    }

    return (
        <div className="product-page">
            <Product_Hero />
            <Product_Option 
                selectedOption={selectedOption} 
                setSelectedOption={setSelectedOption} 
            />
            
            {renderContent()}
            
            <Product_CTA />
        </div>
    )
}

export default Product