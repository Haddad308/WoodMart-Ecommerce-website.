import React from 'react'
import logo from "../../assets/img/mega-electronics-logo.svg"
import googleplay from "../../assets/img/google-play.svg";
import appplay from "../../assets/img/app-store.svg";
import paymnets from "../../assets/img/payments.png";


export default function Footer() {
    return (
    <footer className='' >
        <div className="row p-4">
            <div className="col-3">
                <div className="logo">
                    <img src={logo} width={"200px"} height={"34px"}  alt="" />
                </div>
                <p className=' grey my-3' >Condimentum adipiscing vel neque  dis  <br />nam parturient orci at scelerisque.</p>
                <h5>Subscribe us</h5>
                <div className="icons d-flex">
                    <div className="icon">
                        <i className='icon-size facebook fa fa-brands fa-facebook-f text-white' ></i>
                    </div>
                    <div className="icon">
                        <i className='icon-size twitter fa fa-brands fa-twitter text-white' ></i>
                    </div>
                    <div className="icon">
                        <i className='icon-size pinterest fa fa-brands fa-pinterest-p text-white' ></i>
                    </div>
                    <div className="icon">
                        <i className='icon-size linkedin fa fa-brands fa-linkedin-in text-white' ></i>
                    </div>
                    <div className="icon">
                        <i className='icon-size telgram fa fa-brands fa-telegram text-white' ></i>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <h5>Categories</h5>
                <div className="pullets my-3">
                    <p className='text-color grey'>Smartphones</p>
                    <p className='text-color grey'>Laptops</p>
                    <p className='text-color grey'>Hardware</p>
                    <p className='text-color grey'>Cameras</p>
                    <p className='text-color grey'>Headphones</p>
                    <p className='text-color grey'>Bathroom</p>
                </div>
            </div>
            <div className="col-2">
                <h5>Useful Links</h5>
                <div className="pullets my-3">
                    <p className='text-color grey'>Promotions</p>
                    <p className='text-color grey'>Stores</p>
                    <p className='text-color grey'>Our contacts</p>
                    <p className='text-color grey'>Delivery & Return</p>
                    <p className='text-color grey'>Outlet</p>
                </div>
            </div>      
            <div className="col-2">
                <h5>Useful Links</h5>
                <div className="pullets my-3">
                    <p className='text-color grey'>Blog</p>
                    <p className='text-color grey'>Our contacts</p>
                    <p className='text-color grey'>Promotions</p>
                    <p className='text-color grey'>Stores</p>
                    <p className='text-color grey'>Delivery & Return</p>
                </div>
            </div>
            <div className="col-3">
                <h5>Download App on Mobile:</h5>
                <p className=' grey' >15% discount on your first purchase</p>
                <div className="row images">
                    <div className="col-6">
                        <img src={googleplay} alt="" />
                    </div>
                    <div className="col-6">
                        <img src={appplay} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <hr  />
        <div className='d-flex justify-content-between align-items-center px-4 pb-3' >
            <p className='small m-0' > <span className='fw-bold'>Haddad</span>© 2023 CREATED BY <span className='fw-bold' >XTEMOS STUDIO.</span>  PREMIUM E-COMMERCE SOLUTIONS.</p>
            <div className="payments">
                <img src={paymnets} alt="" />
            </div>
        </div>
    </footer>
    )
}
