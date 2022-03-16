import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import useAuth from '../LoginPage/useAuth';
import {
    BrowserRouter as Router,
    
    Link
  } from "react-router-dom";
const Profile = ({ profile }) => {
    const { user } = useAuth()
    const { image, web, number, about, country, _id } = profile
    return (
        <div className=' d-flex justify-content-center align-items-center '>
            <Card className='box ' style={{ width: '45rem' }}>
                <div className=' d-flex justify-content-evenly align-items-center '>

                    <img style={{ width: '250px', height: '200px' }} className='my-3 rounded-circle ms-5' src={`data:image/png;base64,${image}`} alt="" />
                    <div className="">
                        <Link to={`/editprofile/${_id}`}>
                            <button className=' btns'>Profile Edit</button>
                        </Link>
                    </div>

                </div>
                <div className="text-center">
                    <div className="d-flex justify-content-between align-items-center mx-5">
                        <h4 className='fs-4 fw-bold'>Name:{user.displayName}</h4>
                        <h6 className='fs-4 fw-bold'>Email:{user.email}</h6>
                    </div>
                    <h6 className='fs-5  lead'>Country:{country}</h6>
                    <p className='fs-5   lead'>NUmber:{number}</p>

                    <div className="d-flex mx-3 justify-content-center align-items-center">
                        <p className='text-center fs-4 lead'>Story:{about}</p>
                    </div>
                    <h6>Website: {web} </h6>

                </div>
                <div className="d-flex justify-content-center align-items-center ">
                    <button className='btns'>Follow</button>
                    <button className='btns'>UnFollow</button>
                </div>
            </Card>

        </div>
    );
};

export default Profile;