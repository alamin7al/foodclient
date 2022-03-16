import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Tours from './Tours';
import '../all.css'
const TourSetUp = () => {
    const url = 'https://alamin7al.github.io/jsonapi1/api.txt'
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }


    const fatchTours = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setTours(data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error);
        }

    }
    useEffect(() => {
        fatchTours()
    }, [])
    if (loading) {
        return (

            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                </div>


            </>
        )
    }


    if (tours.length === 0) {
        return (
            <div className='title'>
                <h4>No Tours Left</h4>
                <button onClick={() => fatchTours()} className='btn btn-outline-dark' >Refresh</button>
            </div>
        )
    }


    return (
        <div className='container'>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <hr />
            <main>
                <Tours tours={tours} removeTour={removeTour} />
            </main>
        </div>
    );
};

export default TourSetUp;