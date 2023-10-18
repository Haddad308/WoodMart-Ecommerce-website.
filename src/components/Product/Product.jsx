import React from 'react'
import styles from './Product.module.css'
import { Link } from 'react-router-dom'


export default function Product(props) {
    return (<>

        <div className={`bg-white rounded-4 overflow-hidden ${styles.product}`}>
            <Link to={"details/"+props.id}>
                <img className='w-100' src={props.image} alt="mac" />
                <hr className='w-75 m-auto my-2 ' />
                <div className='px-2'>
                    <h6>{props.name.split(" ").splice(0, 2).join(" ")}</h6>
                    <p className='grey m-0' >{props.category}</p>
                    <p className='my-2 fw-medium'> <i className="fa fa-check navtext" aria-hidden="true"></i> In Stock</p>
                    <p className='m-0 navtext h6'>${props.price}.00</p>
                    <div className='my-2 d-flex align-items-center'>
                        <p className='m-0'> {props.ratingsAverage} </p>
                        <i className="fa-solid fa-star" style={{ color: "#eabe12" }}> </i>
                    </div>
                </div>
            </Link>
            <div className='px-2' >
                <button className='btn btn-primary w-100' > Add to Cart </button>
                <h6 className='mt-2'>SKU: <span className='grey fw-light' >234144</span> </h6>
            </div>
        </div>
    </>)
}
