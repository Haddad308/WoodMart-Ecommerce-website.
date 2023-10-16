import React from 'react'
import styles from './Product.module.css'
import mac from "../../assets/img/mac.jpg"


export default function Product() {
    return (
        <div className={`bg-white rounded-4 overflow-hidden ${styles.product}`}>
            <img className='w-100' src={mac} alt="mac" />
            <div className='px-2'>
            <h6>Apple MAcBook Pro 16</h6>
            <p className='grey m-0' >Apple MacBook</p>
            <p className='my-2'> <i class="fa fa-check navtext" aria-hidden="true"></i> In Stock</p>
            <p className='m-0 navtext h6'>$2000.00</p>
            <div className='my-2'>
                <i class="fa-solid fa-star" style={{color: "#eabe12"}}></i>
                <i class="fa-solid fa-star" style={{color: "#eabe12"}}></i>
                <i class="fa-solid fa-star" style={{color: "#eabe12"}}></i>
                <i class="fa-solid fa-star" style={{color: "#eabe12"}}></i>
                <i class="fa-solid fa-star" style={{color: "#eabe12"}}></i>
            </div>
            <button className='btn btn-primary w-100' > Add to Cart </button>
            <h6 className='mt-2'>SKU: <span className='grey fw-light' >234144</span> </h6>
            </div>
        </div>
    )
}
