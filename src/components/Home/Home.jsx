import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import styles from "./Home.module.css"
import g6 from "../../assets/img/g6.png"
import apple from "../../assets/img/apple.png"
import Catogeries from '../Catogeries/Catogeries';
import Products from '../Products/Products';


export default function Home() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    };

    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    useEffect(() => {
        const col1 = col1Ref.current;
        const col2 = col2Ref.current;
        if (col1 && col2) {
            const tallerHeight = Math.max(col1.clientHeight, col2.clientHeight);
            col1.style.height = `${tallerHeight}px`;
            col2.style.height = `${tallerHeight}px`;
        }
    }, []);

    return <>
        <div className="container-fluid">
            <div className="row justify-content-around py-4 d-flex" >
                <div className="col-5 w-49 p-0 rounded-3 overflow-hidden" ref={col1Ref} >
                    <Slider {...settings}>
                        <div className={`${styles.s1} overflow-hidden  rounded-3 text-white p-3 d-flex flex-column align-items-center`}>
                            <h2>The New Google Pixel</h2>
                            <p>Shop Great deals on MacBook, IPad, Iphone and more.</p>
                            <img className='rounded-3' src={g6} alt="phone" />
                            <button className='btn btn-primary'> Order Now!</button>
                        </div>
                        <div className={`${styles.s2} rounded-3 text-white p-3 d-flex flex-column align-items-center`}>
                            <h2>Apple Shopping Event</h2>
                            <p>Shop Great deals on MacBook, IPad, Iphone and more.</p>
                            <img className='rounded-3' src={apple} alt="phone" />
                            <button className='btn btn-primary'> Order Now!</button>
                        </div>
                    </Slider>
                </div>
                <div className="col-5 w-49" ref={col2Ref}>
                    <div className="row rounded-3 text-white   position-relative p-0 mb-3">
                        <img className='w-100  rounded-3 p-0' src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg" alt="" />
                        <div className={`${styles.content}`}>
                            <div className={`row  mb-3 rounded-3 text-white `}>
                                <div className="col-6 p-4 d-flex flex-column justify-content-center">
                                    <h2>Aurora Headset</h2>
                                    <div className="d-flex justify-content-between">
                                        <div className={`${styles.unit}`}>
                                            <h5 className='m-0 pt-2'>32</h5>
                                            <p className='m-0  grey' >Days</p>
                                        </div>
                                        <div className={`${styles.unit} `}>
                                            <h5 className='m-0 pt-2'>18</h5>
                                            <p className='m-0  grey' >Hrs</p>
                                        </div>
                                        <div className={`${styles.unit}`}>
                                            <h5 className='m-0 pt-2'>40</h5>
                                            <p className='m-0  grey' >Min</p>
                                        </div>
                                        <div className={`${styles.unit}`}>
                                            <h5 className='m-0 pt-2'>20</h5>
                                            <p className='m-0  grey' >Secs</p>
                                        </div>
                                    </div>
                                    <button className='btn btn-primary mt-2'> Order Now!</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-6  rounded-3 text-white bg-success w-49 position-relative p-0">
                            <img className='w-100  rounded-3' src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/new-dualsense.jpg" alt="" />
                            <div className={`${styles.content}`}>
                                <h4>New Dual Sense</h4>
                                <p>For Playstation 5</p>
                                <button className='btn btn-light' >View Details</button>
                            </div>
                        </div>
                        <div className="col-6  rounded-3 text-white bg-success w-49 position-relative p-0">
                            <img className='w-100  rounded-3' src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/instant-cameras.jpg" alt="" />
                            <div className={`${styles.content}`}>
                                <h4>Instant Cameras</h4>
                                <p>Get Phote paper!</p>
                                <button className='btn btn-light' >View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Catogeries />
        <Products />
    </>

}
