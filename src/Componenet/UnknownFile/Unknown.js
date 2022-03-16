import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch } from 'react-redux'
import { addCart } from './redux/action/productAction';

const Product = () => {
    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    useEffect(() => {
        setLoading(true)
        const url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)

                setLoading(false)
            })
    }, [])

    const Loading = () => {
        return (

            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={350} />
                    <Skeleton height={75} />
                    <Skeleton height={25} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>

            </>
        )
    }
    const ShowProduct = () => {
        return (

            <>

                <div className="col-md-6">
                    <img src={product.image} height='400px' width={'400px'} alt="" />

                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text--black-50'> {product.category} </h4>
                    <h1 className='display-5'>{product.category}</h1>
                    <p className='lead fw-bold'>{product.rating && product.rating.rate}  <i className='fa fa-star'></i></p>

                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}

                    </h3>
                    <p className='lead '>
                        {product.description}

                    </p>
                    <button onClick={() => addProduct(product)} className='btn btn-outline-dark me-4'>Add To Cart</button>
                    <NavLink to='/cart' className='btn btn-dark'>Go To Cart</NavLink>
                </div>

            </>

        )
    }
    return (
        <div className='container'>
            <div className="row my-5">
                {
                    loading ? <Loading /> : <ShowProduct />
                }
            </div>
        </div>
    );
};

export default Product;