import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Watch } from 'react-loader-spinner'


export default function Products() {

    function getAllProducts() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/products")
    }

    let { data, isLoading } = useQuery("getProducts", getAllProducts);
    console.log(data?.data?.data[0]);



    return (
        <div className='container-fluid my-4'>
            <h3>Our Products</h3>
            {isLoading ? <div className='d-flex justify-content-center align-items-center' >
                <Watch
                    height="80"
                    width="80"
                    radius="48"
                    color="#4fa94d"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div> : <div className="row">
                {data?.data?.data.map(product => <div className="col-2 mb-3">
                    <Product
                        name={product.title}
                        brand={product.brand.name}
                        image={product.images[0]}
                        price={product.price}
                        category={product.category.name}
                        ratingsAverage={product.ratingsAverage}
                        id={product.id}
                    />
                </div>
                )}
            </div>
            }

        </div>
    )
}
