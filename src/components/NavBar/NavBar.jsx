import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import CirlceIcon from '../CirlceIcon/CirlceIcon'
import { tokenContext } from '../../context/tokenContext';




export default function NavBar() {
    let { token, setToken } = useContext(tokenContext);
    let username = localStorage.getItem("userName");
    let navigate = useNavigate();

    function logout() {
        navigate("/login");
        setToken(null);
        localStorage.removeItem("userName");
        localStorage.removeItem("userToken");
    }

    return (
        <nav className={`navbar navbar-expand-lg ${styles.bgNav} `}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-md-center ">
                        <li className="nav-item">
                            <div className={`bg-white d-flex rounded-5 py-1 px-1 align-items-md-center  ${styles.catHover}`}>
                                <CirlceIcon iconClass={"fa-solid fa-bars fa-xs"} size={"wed50"} />
                                <p className='m-0 ps-2 fw-semibold' >All Categories</p>
                            </div>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className={`nav-link fw-semibold  ${styles.linksHover}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className={`nav-link fw-semibold ${styles.linksHover}`} to="#">Our Contacts</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className={`nav-link fw-semibold ${styles.linksHover}`} to="#">Delivery & Return</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className={`nav-link fw-semibold ${styles.linksHover}`} to="#">Oulet</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            {token ? <Link className={`nav-link py-0 d-flex justify-content-center align-items-md-center ${styles.catHover} `} to="#">

                                <div className={`${styles.icons}`}>
                                    <i className={`fa-regular fa-user fs-5`}></i>
                                </div>
                                <li className="nav-item dropdown">
                                    <h6 className="m-0 ms-2 nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">Hi, {username}.</h6>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="#">Wishlist</Link></li>
                                        <li><Link className="dropdown-item" href="#">Cart</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={logout}>Log out</button></li>
                                    </ul>
                                </li>

                            </Link> :


                                <Link className={`nav-link py-0 d-flex justify-content-center align-items-md-center ${styles.catHover} `} to="login">
                                    <div className={`${styles.icons}`}>
                                        <i className={`fa-regular fa-user fs-5`}></i>
                                    </div>
                                    <h6 className='m-0 ms-2'>Sign in</h6>
                                </Link>



                            }

                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link py-0 ${styles.catHover}`} to="#">
                                <div className={`${styles.icons} position-relative`}>
                                    <i className={`fa-solid fa-code-compare fs-5  `}></i>
                                    <p className={`${styles.counter} shadow  p-2`}>0</p>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link py-0 ${styles.catHover}`} to="#">
                                <div className={`${styles.icons} position-relative`}>
                                    <i className={`fa-regular fa-heart fs-5  `}></i>
                                    <p className={`${styles.counter} shadow  p-2`}>0</p>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link py-0 d-flex justify-content-center align-items-md-center ${styles.catHover}`} to="#">
                                <div className={`${styles.icons} position-relative`}>
                                    <i className={`fa fa-shopping-cart fs-5  `}></i>
                                    <p className={`${styles.counter} shadow  p-2`}>0</p>
                                </div>
                                <h6 className='m-0 ms-2 '>$0.00</h6>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
