import React from 'react'
import Product from '../Product/Product'
// import styles from './Products.module.css'


export default function Products() {
    return (
        <div className='container-fluid my-4'>
            <h3>Our Products</h3>
            <div className="row">
                <div className="col-2">
                    <Product/>
                </div>
            </div>
        </div>
    )
}
