import React from 'react'
// import styles from './Catogeries.module.css'
import iphone from "../../assets/img/iphone.jpg"
import ipad from "../../assets/img/apple-ipad-air-blue-1.jpg"
import autle from "../../assets/img/autel.jpg"
import mac from "../../assets/img/mac.jpg"
import bose from "../../assets/img/bose.jpg"
import nikon from "../../assets/img/nikon.jpg"
import asrock from "../../assets/img/asrock.jpg"


export default function Catogeries() {
    return (
        <div className='container-fluid my-5' >
            <h3>Popular Categories</h3>
            <div className="row mt-4">
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={iphone} alt="" />
                    <h5>Apple IPhone</h5>
                    <p className='grey' >8 products</p>
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={mac} alt="" />
                    <h5>Apple MacBook</h5>
                    <p className='grey' >7 products</p>
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={asrock} alt="" />
                    <h5>Motherboards</h5>
                    <p className='grey' >8 products</p>
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={nikon} alt="" />
                    <h5>Cameras</h5>
                    <p className='grey' >8 products</p>
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={bose} alt="" />
                    <h5>Headsets</h5>
                    <p className='grey' >8 products</p>
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={autle} alt="" />
                    <h5>Drones</h5>
                    <p className='grey' >8 products</p>
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <img className='w-100 rounded-4 mb-2' src={ipad} alt="" />
                    <h5>Apple IPad</h5>
                    <p className='grey' >8 products</p>
                </div>
            </div>
        </div>
    )
}
