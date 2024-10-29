import React from 'react'
import Data from '../data/product.json'
import Product from './Product'
function ProdcutList() {

    return (
        <div className='d-flex' style={{ flexWrap: "wrap", gap: "15px" }}>
            {
                Data.map((dt) => (
                    <Product data={dt}  > </Product>
                ))
            }
        </div>
    )
}

export default ProdcutList