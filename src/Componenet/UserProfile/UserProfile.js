import React, { useState } from 'react';
import Menuorder from '../Menu/Menuorder';
import PublicProfile from './PublicProfile';
import YourProfile from './YourProfile';

const UserProfile = () => {
    const [nav, setNav] = useState('menuorder')

    return (
        <div className='container'>
            <div className="row ">

                <div className="col-md-2 my-5 ">

                    <button className='button-8 m-0 px-4' onClick={() => setNav('publicProfile')}> ProfileInfo </button> <br />
                    <button className='button-8 m-0 px-4 my-4' onClick={() => setNav('yourProfile')}> yourProfile  </button>
                    <button className='button-8 m-0 px-4' onClick={() => setNav('menuorder')}> Order List  </button>
                </div>
                <div className="col-md-10  ">
                    <div className="">
                    {
                        nav === "publicProfile" && <PublicProfile />
                    }
                    {
                        nav === "yourProfile" && < YourProfile />
                    }
                    {
                        nav === "menuorder" && < Menuorder />
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;