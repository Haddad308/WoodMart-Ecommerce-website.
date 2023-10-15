import React from 'react'
// TODO: Edit path!
import logo from "C:/Users/Haddad/OneDrive/Desktop/Currently working/Web development/versa/src/assets/img/mega-electronics-logo.svg"
import styles from './MainNavBar.module.css'
import CirlceIcon from '../CirlceIcon/CirlceIcon'


export default function MainNavBar() {
    return (
            <nav className='navbar d-flex p-3 bg-' >
                <div className="logo">
                    <img src={logo} width={"230px"} height={"34px"}  alt="" />
                </div>
                <div className={`${styles.searchBar} d-flex justify-content-between align-items-center  rounded-5 d-flex px-2 `}>
                    <input className={`${styles.inputField} py-1 ps-3 w-100 rounded-5`} placeholder='Search For Products' type="text"/>
                    <CirlceIcon iconClass={"fas fa-search"} />
                </div>
                <div className='d-flex align-items-center'>
                    <i className="fa-solid fa-headset fa-2xl me-2"></i>
                    <div className="navText">
                        <h6 className='mb-1'>24 Support</h6>
                        <p className='navtext mb-1'>+1 212-334-0212</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <i className="fa-solid bg-black fa-globe fa-2xl me-2"></i>
                    <div className="navText">
                        <h6 className='mb-1' >Worldwide</h6>
                        <p className='navtext mb-1'>Free Shipping</p>
                    </div>
                </div>
            </nav>
    )
}
