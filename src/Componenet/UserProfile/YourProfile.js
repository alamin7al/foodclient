import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useAuth from '../LoginPage/useAuth';
import { Link } from 'react-router-dom';

const YourProfile = () => {
    const { user } = useAuth()
    const [fileData, setfileData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/formdatas?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setfileData(data))
    }, [user.email])



    if (fileData.length === 0) {
        return (

            <>
                <div className="">
                    <Skeleton height={400} />
                    <Skeleton height={400} />
                </div>



            </>
        )
    }

 

    return (
        <div>



            {
                fileData.slice(0, 1).map(profile =>
                    <Profile
                        profile={profile}

                    ></Profile>

                )
            }

        </div>
    );
};

export default YourProfile;