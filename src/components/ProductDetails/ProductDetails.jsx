import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import { Watch } from 'react-loader-spinner'


export default function ProductDetails() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    let params = useParams();

    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    async function getProductDetails(id) {
        console.log(id);
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        setDetails(data?.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getProductDetails(params.id);
    }, [params.id])


    return (

        <div className="container">
            {isLoading ? <div className='d-flex justify-content-center align-items-center p-5 m-5' >
                <Watch
                    height="100"
                    width="100"
                    radius="48"
                    color="#4fa94d"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div> :
                <div className='row my-3 d-flex align-items-center'>
                    <div className="col-md-4 rounded-3 overflow-hidden p-0">
                        <Slider {...settings}>
                            {details.images.map((img) => <img className='w-100 rounded-3' src={img} alt="1" />)}
                        </Slider>
                    </div>
                    <div className="col-md-7">
                        <h1>{details.title}</h1>
                        <p className='grey' >{details.description}</p>
                        <h6>{details.category.name}</h6>
                        <div className='d-flex justify-content-between align-items-center '  >
                            <h2 className='navtext' >${details.price}.00</h2>
                            <i className="fa-solid fa-star" style={{ color: "#eabe12" }}> <span className='navtext' > {details.ratingsAverage}</span> </i>
                        </div>
                        <button className='btn btn-primary w-100' > Add to Cart </button>
                        <hr />
                    </div>
                </div>
            }
        </div>
    )
}
