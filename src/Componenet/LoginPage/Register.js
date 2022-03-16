import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { AiTwotoneLock } from "react-icons/ai";
import { SiNamebase } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

import './register.css'

import { useState, } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

    useHistory,

    useLocation,

} from "react-router-dom";

import useAuth from './useAuth';


const Register = () => {
    const { signInuser, loading, error, user, googleLogin } = useAuth()
    const [loginDate, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginDate }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(newLoginData);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (loginDate.password !== loginDate.password2) {
            alert('not Matched')
            return
        }
        signInuser(loginDate.email, loginDate.password, loginDate.name, location, history)
    }

    const handleGoogleLogin = () => {
        googleLogin(location, history)
    }


    return (

        <div>

            <div className="loginimage">

                <div class="containerlogin">

                    <div class="screen">
                        <div class="screen__content">

                            <form onSubmit={handleOnSubmit} class="login">
                                <div class="social-login">
                                    <h3 className='text-dark'>Sign In WIth Google</h3>

                                    <button className='social-icons text-dark button-23' onClick={handleGoogleLogin}>
                                        Sign In <FcGoogle className='fs-1'></FcGoogle>

                                    </button>

                                </div>
                                <div class="login__field">
                                    <SiNamebase></SiNamebase>
                                    <input
                                        name='name'
                                        placeholder='Your Name'
                                        className="login__input"
                                        onBlur={handleOnBlur}
                                        class="login__input" />
                                </div>
                                <div class="login__field">
                                    <AiOutlineMail></AiOutlineMail>
                                    <input
                                        placeholder='Enter Your Email'
                                        name='email'
                                        type='email'
                                        className="login__input "
                                        onBlur={handleOnBlur}
                                        class="login__input" />
                                </div>
                                <div class="login__field">
                                    <AiTwotoneLock></AiTwotoneLock>

                                    <input
                                        placeholder='Enter Your Password'
                                        name='password'
                                        type="password" className="login__input"
                                        onBlur={handleOnBlur}
                                        class="login__input" />
                                </div>
                                <div class="login__field">
                                    <AiTwotoneLock></AiTwotoneLock>
                                    <input
                                        placeholder='ReType Your Password'
                                        name='password2'
                                        type="password" className="login__input"
                                        onBlur={handleOnBlur}
                                        class="login__input" />
                                </div>
                                <button class="button login__submit my-5">
                                    <span class="button__text">Register Now</span>
                                    <i class="button__icon fa fa-sign-in fs-5"></i>
                                </button>
                            </form>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'><p
                                    className='text-dark fs-5'
                                >Have An Account? <em className='text-decoration-underline text-primary fw-bolder' >Login</em> </p>
                            </NavLink>

                            {loading && <div>
                                <div class="spinner-grow text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div><div class="spinner-grow text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>}
                            {user?.email &&
                                <div class="alert alert-primary" role="alert">
                                    User Created SuccessFulyy
                                </div>
                            }
                            {error &&
                                <div class="alert alert-warning" role="alert">
                                    {error}
                                </div>
                            }
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div style={{ background: '', width: '100%', height: '100%' }} className="back">
        //     <div className="">
        //         <div className='   d-flex justify-content-center align-items-center '>
        //             <div className=' fs-5'>
        //                 <div className='row '>
        //                     <div className=' mb-5 '>
        //                         <Card
        //                             style={{ width: '24rem' }} className=' p-3 shad'>
        //                             <h2 className='fw-bolder'>Register</h2>
        //                             <h6 className='text-muted '>  Sign up to see photos and videos from your friends. </h6>
        //                             <div>
        //                                 <button
        //                                     className='btn btn-primary  mt-1 m-0 p-0 w-100 '
        //                                     onClick={handleGoogleLogin}
        //                                 >
        //                                     <AiFillGoogleCircle className=' text-white bg-primary fs-1 me-3'></AiFillGoogleCircle>


        //                                     LogIn With  Google</button>
        //                             </div>

        //                            <hr className='style-eight'/>



        //                             {!loading && <form onSubmit={handleOnSubmit}>
        //                                 <div className="mb-1 text-start">

        //                                     <input
        //                                         name='name'
        //                                         placeholder='Your Name'
        //                                         className="login__input"
        //                                         onBlur={handleOnBlur}
        //                                         id="exampleInputPassword1" />
        //                                 </div>
        //                                 <div className="mb-1 text-start">
        //                                     <input
        //                                         placeholder='Enter Your Email'
        //                                         name='email'
        //                                         type='email'
        //                                         className="login__input "
        //                                         onBlur={handleOnBlur}
        //                                         id="exampleInputPassword1" />
        //                                 </div>

        //                                 <div className="mb-1 text-start">
        //                                     <input
        //                                         placeholder='Enter Your Password'
        //                                         name='password'
        //                                         type="password" className="login__input"
        //                                         onBlur={handleOnBlur}
        //                                         id="exampleInputPassword1" />
        //                                 </div>
        //                                 <div className=" text-start">
        //                                     <input
        //                                         placeholder='Enter Your Re Type Your Password'
        //                                         name='password2'
        //                                         type="password" className="login__input"
        //                                         onBlur={handleOnBlur}
        //                                         id="exampleInputPassword1" />
        //                                 </div>
        //                                 <div className="text-center mt-1">

        //                                     <button
        //                                         className='btn btn-primary my-3  mt-1 m-0 p-0 w-100 py-1'
        //                                         type='submit' >
        //                                         <AiOutlineLogin className='fs-1 me-3 text-white bg-primary'></AiOutlineLogin>

        //                                         Sign Up</button>



        //                                 </div>
        //                                 <h6 className='mb-3'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h6>
        //                                 <Card
        //                                     style={{ width: '22rem' }} className=' '>
        // <NavLink
        //     style={{ textDecoration: 'none' }}
        //     to='/login'><p
        //         className='text-dark fs-5'
        //     >Have An Account? <em className='text-decoration-underline text-primary fw-bolder' >Login</em> </p>
        // </NavLink>
        //                                 </Card>
        //                             </form>}
        // {loading && <div>
        //     <div class="spinner-grow text-dark" role="status">
        //         <span class="visually-hidden">Loading...</span>
        //     </div><div class="spinner-grow text-dark" role="status">
        //         <span class="visually-hidden">Loading...</span>
        //     </div>
        // </div>}
        // {user?.email &&
        //     <div class="alert alert-primary" role="alert">
        //         User Created SuccessFulyy
        //     </div>
        // }
        // {error &&
        //     <div class="alert alert-warning" role="alert">
        //         {error}
        //     </div>
        // }
        //                         </Card>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Register;