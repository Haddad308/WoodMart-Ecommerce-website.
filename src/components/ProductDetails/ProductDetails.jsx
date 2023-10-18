import React from 'react'
import { useParams } from 'react-router-dom'
// import styles from './ProductDetails.module.css'
import ipad from "../../assets/img/oculus-quest-2-1.jpg"


export default function ProductDetails() {
    // let PorductId = useParams();

    return (
        <div className="container">
            <div className='row my-3 d-flex align-items-center'>
                <div className="col-md-4">
                    <img className='w-100' src={ipad} alt="" />
                </div>
                <div className="col-md-7">
                    <h1>Oculus Quest 2</h1>
                    <p className='grey' >The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                    <h6>Electronics</h6>
                    <div className='d-flex justify-content-between align-items-center '  >
                        <h2 className='navtext' >$400.00</h2>
                        <i className="fa-solid fa-star" style={{ color: "#eabe12" }}> <span className='navtext' > 4.5</span> </i>
                    </div>
                    <button className='btn btn-primary w-100' > Add to Cart </button>
                    <hr />
                </div>
            </div>
        </div>
    )
}
